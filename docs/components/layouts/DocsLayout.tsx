import React from 'react';
import { RenderableTreeNode, Tag } from '@markdoc/markdoc';

import { Footer, SideNav, SectionNav, Section } from '../shell-temp';
import { LayoutProps } from './types';

export const DocsLayout = ({ children, markdoc }: LayoutProps) => {
  const sections = markdoc?.content ? collectSections(markdoc.content) : [];

  const skipNavID = 'skip-nav';

  return (
    <>
      <SkipNav id={skipNavID} />
      <div className="page">
        <div className="page-container">
          <div className="page-layout">
            <SideNav />
            <main className="flex column">
              <div id={skipNavID} />
              {children}
              <Footer filePath={markdoc?.file?.path} />
            </main>
            <SectionNav sections={sections} />
          </div>
        </div>
      </div>
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
            max-width: var(--page-max-width);
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
    </>
  );
};

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
