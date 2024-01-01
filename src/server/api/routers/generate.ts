import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { OpenAI } from "openai";
import { env } from "~/env.mjs";
import { b64Image } from "~/data/b64Image";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

async function generateIcon(prompt: string): Promise<string | undefined> {
  // make sure this is explicitly "true" or "false" as flag is a string, not a bool
  if (env.MOCK_DALLE === "true") {
    return b64Image;
  }

  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });

  return response.data[0]?.b64_json;
}

export const generateRouter = createTRPCRouter({
  generateIcon: protectedProcedure
    .input(
      z.object({
        prompt: z.string({}),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log("we are here", input.prompt);
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

      const base64EncodedImage = await generateIcon(input.prompt);

      return {
        message: "success",
        base64EncodedImage: base64EncodedImage,
      };
    }),
});
