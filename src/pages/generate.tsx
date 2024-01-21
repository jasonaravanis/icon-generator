import { GenerationForm } from "@components/generation-form";
import Head from "next/head";

const Generate = () => {
  return (
    <>
      <Head>
        <title>Icon Generator | Generate</title>
        <meta name="description" content="Icon Generator | Generate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GenerationForm />
      </main>
    </>
  );
};

export default Generate;
