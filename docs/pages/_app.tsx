import React from 'react';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { NextRouter } from 'next/router';
import { RenderableTreeNode, Tag } from '@markdoc/markdoc';
import { MarkdocNextJsPageProps } from '@markdoc/next.js';

import {
  Footer,
  Header,
  SideNav,
  SideNavContext,
  SectionNav,
  Section,
  useSidenavState,
} from '../components/Shell';
import '../public/global.css';

// Types
// ------------------------------

type AppProps<P = unknown> = {
  pageProps: P;
  router: NextRouter;
} & Omit<NextAppProps<P>, 'pageProps'>;

type PageProps = MarkdocNextJsPageProps & {
  is404?: boolean;
};

// App
// ------------------------------

const BRAND = 'Emery';
const SUMMARY = 'Utilities to help polish the parts of TypeScript that are a bit rough.';

export default function MyApp(props: AppProps<PageProps>) {
  const { Component, pageProps, router } = props;
  const { markdoc, is404 } = pageProps;
  const sidenavContext = useSidenavState();

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

  const sections = pageProps.markdoc?.content ? collectSections(pageProps.markdoc.content) : [];

  const skipNavID = 'skip-nav';
  const isLandingPage = router.pathname === '/';
  const isDocs = !isLandingPage && !is404;

  return (
    <div className="layout">
      <Head>
        <title>{`${title} | ${BRAND}`}</title>
        <meta name="title" content={title} />
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
        <meta property="og:title" content={title} />
        <meta property="og:description" content={SUMMARY} />
        <meta property="og:image" content={canonicalUrl('/share-large.jpg')} />
      </Head>
      {isDocs && <SkipNav id={skipNavID} />}
      <SideNavContext.Provider value={sidenavContext}>
        <Header />
        <div className="page">
          <div className="page-container">
            <div className="page-layout">
              {isDocs ? <SideNav /> : null}
              <main className="flex column">
                <div id={skipNavID} />
                <Component {...pageProps} />
                {!is404 && <Footer filePath={markdoc?.file?.path} />}
              </main>
              {isDocs && sections ? <SectionNav sections={sections} /> : null}
            </div>
          </div>
        </div>
      </SideNavContext.Provider>
      <style jsx>
        {`
          .layout {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .page {
            flex-grow: 1;
            padding-top: var(--header-height);
          }
          .page-container {
            max-width: ${!isDocs
              ? 'calc(var(--page-max-width) - var(--sidenav-width) * 2)'
              : 'var(--page-max-width)'};
            margin-inline: auto;
          }
          .page-layout {
            display: flex;
          }
          @media screen and (max-width: 600px) {
            .page-layout {
              flex-direction: column;
            }
          }

          main {
            flex-grow: 1;
            max-width: 100%;
            /* https://stackoverflow.com/questions/36230944/prevent-flex-items-from-overflowing-a-container */
            min-width: 0;
          }
        `}
      </style>
    </div>
  );
}

// Styled components
// ------------------------------

/* https://webaim.org/techniques/skipnav/ */
function SkipNav({ id }: { id: string }) {
  return (
    <>
      <a href={`#${id}`} className="skip-nav">
        Skip to content
      </a>
      <style jsx>{`
        .skip-nav {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          position: absolute;
          text-decoration: none;
        }

        .skip-nav:focus {
          padding: 1rem;
          position: fixed;
          top: 10px;
          left: 10px;
          background: var(--light);
          z-index: 1000;
          width: auto;
          height: auto;
          clip: auto;
        }
      `}</style>
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

function isTag(node: RenderableTreeNode): node is Tag {
  return Boolean(node) && typeof node !== 'string';
}

function collectSections(node: RenderableTreeNode, sections: Section[] = []) {
  if (isTag(node)) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        // @ts-expect-error not sure how to extract attributes from markdoc tags
        sections.push({ ...node.attributes, title });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectSections(child, sections);
      }
    }
  }

  return sections;
}
