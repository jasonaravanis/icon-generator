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
      <Heading
        style="h1"
        textAlign="center"
        marginY="space-e"
        paddingX="space-a"
      >
        Beautiful Icons.<span style={{ display: "block" }}>Just For You.</span>
      </Heading>
      <Text>Created in moments using the power of artifical intelligence</Text>
      <Flex width="full"></Flex>
    </>
  );
}
