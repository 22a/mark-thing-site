import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>page titles are important</title>
        <meta
          name="description"
          content="description meta tags are important"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Feature 4: Pink site</h1>
        <div className={styles.footer}>
          <span style={{ marginRight: "0.5rem" }}>How does</span>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
            className={styles.logo}
          />
          <span style={{ marginLeft: "0.5rem" }}>work?</span>
        </div>
      </main>
    </div>
  );
}
