import DefaultLayout from "components/DefaultLayout";
import MiddleAbout from "components/MiddleAbout";
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
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <MiddleAbout />
    </DefaultLayout>
  );
}
