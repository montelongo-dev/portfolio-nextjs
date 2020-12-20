import React from "react";
import Head from "next/head";

export default function IndexHead() {
  return (
    <Head>
      <title>Sam Montelongo | Backend Web Developer</title>
      <link
        rel="icon"
        href="https://polite-kangaroo-2.loca.lt/images/favicon.ico"
      />

      <meta
        property="og:title"
        content="Sam Montelongo | Backend Web Developer"
      />
      <meta property="og:url" content="https://rusty-nailz.com/" />
      <meta
        property="og:image"
        content="https://polite-kangaroo-2.loca.lt/images/og_image.png"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="I’m Sam Montelongo, an experienced backend web developer specializing in creating dynamic web applications."
      />
    </Head>
  );
}
