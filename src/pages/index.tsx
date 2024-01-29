import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Icon Generator</title>
        <meta name="description" content="Icon Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-red-500">Hello World</div>
      <Button>Some Button</Button>
    </>
  );
}
