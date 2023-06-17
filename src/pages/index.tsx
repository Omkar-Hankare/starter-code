import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sample Title</title>
        <meta name="Sample Title" content="" />
        <link rel="icon" href="" />
      </Head>

      <main>This is the homepage. </main>
      {/* Check next.config.js for redirects */}
      <footer>Footer</footer>
    </div>
  );
}
