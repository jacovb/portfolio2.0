import Head from "next/head";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio - Jaco van Biljon</title>
        <meta
          name="description"
          content="Project Portfolio of Jaco van Biljon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Portfolio />
    </div>
  );
}
