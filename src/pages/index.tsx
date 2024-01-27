import { Box } from "@components/box";
import { Button } from "@components/button";
import { ExampleComponent } from "@components/example-component";
import { Flex } from "@components/flex";
import { Sandbox } from "@components/sandbox";
import { Heading } from "@components/typography";
import { Text } from "@components/typography/text";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Icon Generator</title>
        <meta name="description" content="Icon Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        align="center"
        paddingX="space-a"
        paddingY="space-e"
        gap="space-d"
      >
        <Heading style="h1" textAlign="center" paddingX="space-a">
          Beautiful Icons.
          <span style={{ display: "block" }}>Just For You.</span>
        </Heading>

        <Text textAlign="center">
          Created in moments using the power of artifical intelligence
        </Text>
      </Flex>

      <Text paddingY="space-c" color="contrast">
        CAROUSEL HERE
      </Text>
      <Flex direction="column" align="center" paddingX="space-a" gap="space-d">
        <Heading style="h2">Feeling Creative?</Heading>
        <Text textAlign="center">
          All you need is the power of your imagination
        </Text>
        <Button label="Get Started" />
      </Flex>
    </>
  );
}
