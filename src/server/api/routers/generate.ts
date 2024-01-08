import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { OpenAI } from "openai";
import { env } from "~/env.mjs";
import { b64Image } from "~/data/b64Image";
import { S3 } from "@aws-sdk/client-s3";

// TODO: add error handling i.e if prompt is rejected by DALL-E due to content policy

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

const s3 = new S3({
  credentials: {
    accessKeyId: env.CLOUD_AWS_ACCESS_KEY,
    secretAccessKey: env.CLOUD_AWS_SECRET_KEY,
  },
  region: env.CLOUD_AWS_REGION,
});

async function generateIcon(prompt: string): Promise<string | undefined> {
  // make sure this is explicitly "true" or "false" as flag is a string, not a bool
  if (env.MOCK_IMAGE_GENERATION === "true") {
    return b64Image;
  }

  console.log("getting real image from DALL-E API");

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
    quality: "hd",
  });

  return response.data[0]?.b64_json;
}

export const generateRouter = createTRPCRouter({
  generateIcon: protectedProcedure
    .input(
      z.object({
        prompt: z.string(),
        color: z.string(),
        style: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { count } = await ctx.prisma.user.updateMany({
        where: {
          id: ctx.session.user.id,
          credits: {
            gte: 1,
          },
        },
        data: {
          credits: {
            decrement: 1,
          },
        },
      });

      if (count <= 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "insufficient credits",
        });
      }

      const combinedPrompt = `A beautiful app icon of ${input.prompt} in a ${input.style} style. The colour should be ${input.color}.`;

      console.log("combinedPrompt", combinedPrompt);

      const base64EncodedImage = await generateIcon(combinedPrompt);

      if (!base64EncodedImage) {
        return {
          message: "failure",
        };
      }

      const icon = await ctx.prisma.icon.create({
        data: {
          prompt: input.prompt,
          userId: ctx.session.user.id,
        },
      });

      if (env.MOCK_IMAGE_GENERATION === "true") {
        await (async () =>
          new Promise((resolve: any) => setTimeout(resolve, 2000)))();
        return {
          message: "success - using mock",
          s3ImageUrl: env.MOCK_AWS_S3_IMAGE_URL,
        };
      }

      await s3.putObject({
        Key: icon.id,
        Body: Buffer.from(base64EncodedImage, "base64"),
        Bucket: env.CLOUD_AWS_S3_BUCKET_NAME,
        ContentEncoding: "base64",
        ContentType: "image/png",
      });

      const s3ImageUrl = `https://${env.CLOUD_AWS_S3_BUCKET_NAME}.s3.${env.CLOUD_AWS_REGION}.amazonaws.com/${icon.id}`;

      return {
        message: "success",
        s3ImageUrl,
      };
    }),
});
