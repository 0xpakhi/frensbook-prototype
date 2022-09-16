import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "../components/Main/Landing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frensbook</title>
        <meta
          name="Networking made simpler using one click."
          content="Frensbook - Networking made simpler using one click."
        />
        <link rel="icon" href="/handshakefavicon.webp" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <Landing />
      </main>
    </div>
  );
}
