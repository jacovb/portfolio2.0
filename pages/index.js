import Head from "next/head";

export default function Home() {
  return (
    <div className="container mt-16 flex justify-between items-center mx-auto px-8 mx-auto md:px-14 lg:px-24 w-full">
      <Head>
        <title>Portfolio - Jaco van Biljon</title>
        <meta
          name="description"
          content="Project Portfolio of Jaco van Biljon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main>
        <div className="flex flex-wrap md:flex-nowrap">
          Building Unique Experiences
        </div>
      </main> */}
    </div>
  );
}
