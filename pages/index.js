import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

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
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
