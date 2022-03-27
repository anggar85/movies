import Head from "next/head";
/**
 *  This is a reusable component to generate custom titles and description for the page
 * This is one of the things that helps the SEO of the webpage
 */
const HeaderGeneric = ( { title, desc } ) => {
  return (
    <Head>
      <title>{title} - Sales Hub Test</title>
      <meta name="description" content={desc} />
      <link rel="shortcut icon" href="/img/favicon.ico" />
    </Head>
  );
};

export default HeaderGeneric;
