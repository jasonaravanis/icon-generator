import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "~/components/Button";

function HeroBanner() {
  return (
    <section className="order mb-24 grid grid-cols-1 gap-12 sm:grid-cols-2">
      <div className=" flex flex-col gap-4">
        <h1 className="text-6xl">Generate icons with a click of a button</h1>
        <p className=" text-2xl">
          Use AI to generate the professional icons you need in seconds
        </p>
        <Button href="/generate">Generate your icons</Button>
      </div>
      <Image
        src="/banner.png"
        alt="A gallery of icons"
        width="450"
        height="300"
        className=" order-first sm:order-none"
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
