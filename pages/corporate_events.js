import DefaultLayout from "components/DefaultLayout";
import MiddleCorporate from "components/MiddleCorporate";
import Head from "next/head";

export default function CorporateEvents() {
  return (
    <DefaultLayout>
      <Head>
        <title>Game Boards</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.41, maximum-scale=1"
        />
      </Head>
      <MiddleCorporate />
    </DefaultLayout>
  );
}
