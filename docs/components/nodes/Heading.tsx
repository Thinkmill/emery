import * as React from 'react';
import { useRouter } from 'next/router';

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingTag = `h${HeadingLevel}`;
export type HeadingProps = {
  id?: string;
  level: HeadingLevel;
  children: React.ReactNode;
};

export function Heading({ children, id = '', level = 1 }: HeadingProps) {
  const router = useRouter();
  const isDocs = router.pathname.startsWith('/docs');
  const showLink = isDocs && level !== 1 && id;

  const Tag: HeadingTag = `h${level}`;
  const className = `heading ${isDocs && [2, 3, 4].includes(level) ? ' docs-heading' : ''}`;

  return (
    <Tag className={className} id={id} data-scroll-link={showLink || undefined}>
      {showLink ? <HeadingLink href={`#${id}`} /> : null}
      <span>{children}</span>
      <style jsx>{`
        .heading {
          color: var(--text-prominent);
          font-weight: var(--fw-regular);
          line-height: 1.2;
          position: relative;
        }

        .docs-heading {
          margin-top: var(--scroll-offset);
          scroll-margin-top: calc(var(--header-height) + var(--scroll-offset));
        }

        /* quick-and-dirty leading trim */
        .heading[data-scroll-link]::before {
          content: '';
          display: table;
          margin-bottom: -0.1818em;
        }
        .heading[data-scroll-link]::after {
          content: '';
          display: table;
          margin-top: -0.1818em;
        }

        h1.heading {
          font-size: var(--hfs-1);
        }
        h2.heading {
          font-size: var(--hfs-2);
        }
        h3.heading {
          font-size: var(--hfs-3);
        }
        h4.heading {
          font-size: var(--hfs-4);
        }
        h5.heading {
          font-size: var(--hfs-5);
        }
        h6.heading {
          font-size: var(--hfs-6);
        }
      `}</style>
    </Tag>
  );
}

function HeadingLink({ href }: { href: string }) {
  return (
    <>
      <a href={href} aria-label="Anchor" className="heading-link">
        <style jsx>{`
          .heading-link {
            left: 0;
            opacity: 0;
            padding-right: 0.5rem;
            position: absolute;
            text-decoration: none;
            transform: translateX(-100%);
            transition: opacity 100ms linear;
          }
          .heading-link::after {
            content: '#';
          }
          /* ":global" because jsx|style doesn't understand classes outside of the component */
          :global(.heading:hover) .heading-link {
            opacity: 0.5;
          }
          /* ":global(.heading)" required to increase specificity */
          :global(.heading) .heading-link:hover {
            opacity: 1;
          }
        `}</style>
      </a>
    </>
  );
}
