import React from 'react';
import Head from 'next/head';

import {
  Footer,
  SideNav,
  SideNavContext,
  useSidenavState,
  TableOfContents,
  Header,
} from '../components/Shell';

import '../public/global.css';

const TITLE = 'TS Runtime DX';

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        // @ts-expect-error FIXME
        sections.push({ ...node.attributes, title });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const { markdoc } = pageProps;
  const sidenavContext = useSidenavState();

  let title = TITLE;
  let description = 'Utility functions to improve TypeScript DX at runtime';
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content ? collectHeadings(pageProps.markdoc.content) : [];

  const skipNavID = 'skip-nav';
  const isLandingPage = props.router.pathname === '/';
  const isDocs = !isLandingPage;

  return (
    <div className="layout">
      <Head>
        <title>{`${TITLE} | ${title}`}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thinkmill.github.io/ts-runtime-dx" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://thinkmill.github.io/ts-runtime-dx/images/share.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://thinkmill.github.io/ts-runtime-dx/images/share.png"
        />
      </Head>
      <SkipNav id={skipNavID} />
      <SideNavContext.Provider value={sidenavContext}>
        <Header />
        <div className="page">
          <div className="page-container">
            <div className="page-layout">
              {isDocs ? <SideNav /> : null}
              <main className="flex column">
                <div id={skipNavID} />
                <Component {...pageProps} />
                <Footer filePath={markdoc?.file?.path} />
              </main>
              {isDocs && toc ? <TableOfContents toc={toc} /> : null}
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
            max-width: ${isLandingPage
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
/* https://webaim.org/techniques/skipnav/ */
function SkipNav({ id }) {
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
