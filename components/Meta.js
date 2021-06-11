import Head from "next/head";

const Meta = ({
  title,
  favicon,
  url,
  description,
  keywords,
  appId,
  ogSiteName,
}) => (
  <Head>
    <title>{title || Meta.defaultProps.title}</title>
    <link rel="canonical" href={url} />
    <link rel="icon" href={favicon} />
    <meta charSet="UTF-8" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    {/* <meta name="robots" content="noodp, noydir, index, follow, archive" /> */}

    <meta
      name="description"
      content={description || Meta.defaultProps.description}
    />
    <meta name="keywords" content={keywords} />

    <meta property="og:image" content={favicon} />
  </Head>
);

Meta.defaultProps = {
  title: "Game Boards",
  url: "localhost:3000",
  favicon: "/images/logo.png",
  description: "",
  keywords: "",
  ogSiteName: "Game Boards",
};

export default Meta;
