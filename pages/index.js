import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export default function Home() {
  // SMALL PIECE OF LOCAL STATE, UPDATED FROM API ENDPOINT
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

  // SOME EXAMPLE NONSENSE CONTENT FROM CONTENTFUL

  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [contentfulEntries, setContentfulEntries] = useState([]);

  useEffect(() => {
    async function getContentfulEntries() {
      const allContentfulEntries = await fetchEntries();
      setContentfulEntries([...allContentfulEntries]);
    }
    getContentfulEntries();
  }, []);

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
        <div className={styles.contentfulItemsContainer}>
          {contentfulEntries.length > 0
            ? contentfulEntries
                .filter(e => Boolean(e.fields.companyName))
                .map(e => <pre>{JSON.stringify(e.fields, null, 2)}</pre>)
            : null}
        </div>
      </main>
    </div>
  );
}
