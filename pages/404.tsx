import Head from "next/head";
import { Fragment } from "react";

export default function Custom404() {
  return (
    <Fragment>
      <Head>
        <title>Page Not Found - Sarah&apos;s Snacks</title>
        <link rel="shortcut icon" href="/sarahsnacks-fav.png" />
      </Head>
      <main className={`main`}>
        <section className={`product`}>
          <h1>404 - Page Not Found</h1>
        </section>
      </main>
    </Fragment>
  );
}
