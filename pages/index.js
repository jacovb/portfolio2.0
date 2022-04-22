import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import NavDots from "../components/NavDots";

export default function Home({ pageNum }) {
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

      <NavDots pageNum={pageNum} />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
