import { ExampleComponent } from "@components/example-component";
import { NavBar } from "@components/nav-bar";
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
        <NavBar />
        <ExampleComponent />
      </main>
    </>
  );
}
