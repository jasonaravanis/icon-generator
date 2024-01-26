import { ExampleComponent } from "@components/example-component";
import { Sandbox } from "@components/sandbox";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Icon Generator</title>
        <meta name="description" content="Icon Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sandbox />
        <ExampleComponent />
      </main>
    </>
  );
}
