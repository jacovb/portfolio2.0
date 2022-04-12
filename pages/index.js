import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - Jaco van Biljon</title>
        <meta
          name="description"
          content="Project Portfolio of Jaco van Biljon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="min-h-screen w-screen flex flex-row items-center">
          Jaco van Biljon - Portfolio
        </div>
      </main>
    </div>
  );
}
