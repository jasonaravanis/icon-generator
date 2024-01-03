import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "~/components/Button";

function HeroBanner() {
  return (
    <section className=" grid grid-cols-2 gap-12">
      <div className=" flex flex-col gap-4">
        <h1 className="text-6xl">Generate icons with a click of a button</h1>
        <p className=" text-2xl">
          Use AI to generate icons in seconds instead of paying a designer and
          waiting from the create them for you.
        </p>
        <Button href="/generate">Generate your icons</Button>
      </div>
      <Image
        src="/banner.png"
        alt="A gallery of icons"
        width="450"
        height="300"
      />
    </section>
  );
}

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Icon Generator</title>
        <meta name="description" content="Icon Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" container mx-auto flex flex-col items-center justify-center p-8 ">
        <HeroBanner />
      </main>
    </>
  );
};

export default HomePage;
