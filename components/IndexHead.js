import React from "react";
import Head from "next/head";

export default function IndexHead() {
  return (
    <Head>
      <title>{process.env.META_TITLE}</title>
      <link rel="icon" href={process.env.META_ICON} />

      <meta property="og:title" content={process.env.META_TITLE} />
      <meta property="og:url" content={process.env.META_SITE_URL} />
      <meta property="og:image" content={process.env.META_OG_IMAGE} />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content={process.env.META_OG_DESCRIPTION}
      />
    </Head>
  );
}
