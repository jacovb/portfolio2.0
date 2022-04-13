import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center flex-grow">
      <Head>
        <title>Portfolio - Jaco van Biljon</title>
        <meta
          name="description"
          content="Project Portfolio of Jaco van Biljon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>Jaco van Biljon - Portfolio</div>
      </main>
    </div>
  );
}
