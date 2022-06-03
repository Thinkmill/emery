import React, { Fragment } from 'react';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { NextRouter } from 'next/router';
import { MarkdocNextJsPageProps } from '@markdoc/next.js';

import { ErrorLayout, DocsLayout, HomeLayout } from '../components/layouts';
import { Footer, Header, SideNavContext, useSidenavState } from '../components/shell-temp';

import '../public/global.css';

// Types
// ------------------------------

type AppProps<P = unknown> = {
  pageProps: P;
  router: NextRouter;
} & Omit<NextAppProps<P>, 'pageProps'>;

type PageProps = MarkdocNextJsPageProps & {
  isErrorPage?: boolean;
};

// App
// ------------------------------

const BRAND = 'Emery';
const SUMMARY = 'Polish for the rough parts of TypeScript.';

export default function MyApp(props: AppProps<PageProps>) {
  const sidenavContext = useSidenavState();
  const { Component, pageProps, router } = props;
  const { markdoc, isErrorPage } = pageProps;

  let title = BRAND;
  let description = SUMMARY;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }
  const isHome = router.pathname === '/';
  const isDocs = !isHome && !isErrorPage;

  const Layout = (() => {
    if (isErrorPage) {
      return ErrorLayout;
    }
    if (isHome) {
      return HomeLayout;
    }
    if (isDocs) {
      return DocsLayout;
    }

    return Fragment;
  })();

  const brandAppendedTitle = `${title} — ${BRAND}`;

  return (
    <>
      <Head>
        <title>{isHome ? `${BRAND} - ${title}` : brandAppendedTitle}</title>
        <meta name="description" content={description} />

        <meta name="viewport" content="width=device-width" />
        <meta name="referrer" content="strict-origin" />
        <meta name="application-name" content="Emery" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <meta name="twitter:site" content="@thethinkmill" />
        <meta name="twitter:creator" content="@jossmackison" />
        <meta name="twitter:title" content={brandAppendedTitle} />
        <meta name="twitter:description" content={description} />
        {isDocs ? (
          <>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content={canonicalUrl('/share.png')} />
          </>
        ) : (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={canonicalUrl('/share-large.jpg')} />
          </>
        )}

        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl(router.pathname)} />
        <meta property="og:title" content={brandAppendedTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={canonicalUrl('/share-large.jpg')} />
      </Head>

      <SideNavContext.Provider value={sidenavContext}>
        <Header />

        <Layout markdoc={markdoc}>
          <Component {...pageProps} />
        </Layout>

        {isHome ? <Footer filePath={markdoc.file.path} /> : null}
      </SideNavContext.Provider>
    </>
  );
}

// Utils
// ------------------------------

function canonicalUrl(path?: string) {
  const url = 'https://emery-ts.vercel.app';
  if (!path) return url;
  return url + path;
}
