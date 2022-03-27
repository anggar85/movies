import Head from "next/head";
import { useEffect } from "react";
import Library from "./library";
/**
 * Main file the return library component when url is '/'
 */
export default function Home() {

  useEffect( ()=>{
  },[] );

  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta
          name="description"
          content=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Library />
    </div>
  );
}
