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

      <main className="flex flex-col items-center h-full justify-center ">
        <h1 className="sm:text-4xl md:text-5xl font-thin">
          Euskal data <u>Covid19.</u>
        </h1>
        <p className="text-gray-700 dark:text-red-400">dark</p>
      </main>

      <footer />
    </div>
  );
}
