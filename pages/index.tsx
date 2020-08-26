import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data } = useSWR('/api/hello', fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>Euskal data covid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center h-full justify-center">
        <h1>
          Euskal data <u>Covid19.</u>
        </h1>
      </main>

      <footer />
    </div>
  );
}
