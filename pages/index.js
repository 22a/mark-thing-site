import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateNewRandomNumber = _clickEvent => {
    fetch("/api/random-gen")
      .then(res => res.json())
      .then(
        result => {
          setRandomNumber(result);
        },
        error => {
          console.error("uhh ohh", error);
        }
      );
  };

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
        <div>Today's random number is: {randomNumber}</div>
        <button onClick={generateNewRandomNumber}>Change random number</button>

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
