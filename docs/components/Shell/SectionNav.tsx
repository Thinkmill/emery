import React from 'react';
import Link from 'next/link';

export type Section = { id: string; level: 2 | 3; title: string };
type SectionNavProps = { sections: Section[] };

export function SectionNav({ sections }: SectionNavProps) {
  const items = sections.filter(item => item.id && (item.level === 2 || item.level === 3));

  return (
    <nav role="navigation" className="toc">
      <h3 className="toc-title">On this page</h3>
      {items.length > 1 ? (
        <ul className="toc-list">
          {items.map(item => {
            const href = `#${item.id}`;
            const current = typeof window !== 'undefined' && window.location.hash === href;

            return (
              <li
                key={item.title}
                className="toc-item"
                data-level={item.level}
                data-current={current}
              >
                <Link href={href} passHref>
                  <a className="toc-link" data-inset={item.level >= 3} data-current={current}>
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      <style jsx>
        {`
          .toc {
            align-self: flex-start; /* https://stackoverflow.com/questions/44446671/my-position-sticky-element-isnt-sticky-when-using-flexbox */
            flex: 0 0 var(--sidenav-width);
            margin-bottom: 1rem;
            max-height: calc(100vh - var(--header-height));
            padding-left: var(--gutter-small);
            position: sticky;
            top: calc(var(--scroll-offset) + var(--header-height));
          }

          .toc-title {
            color: var(--text-prominent);
            font-weight: var(--fw-medium);
            font-size: var(--text-standard);
            margin-bottom: var(--vertical-rhythm-prominent);
          }

          .toc-list {
            font-size: var(--fs-small);
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          .toc-item:not(:first-child) {
            padding-top: 0.25rem;
          }
          .toc-item:not(:last-child) {
            padding-bottom: 0.25rem;
          }
          .toc-item:not([data-inset]) {
            margin-top: var(--gutter-small);
          }

          .toc-link {
            display: block;
            text-decoration: none;
          }
          .toc-link[data-inset] {
            color: var(--text-muted);
            font-weight: var(--fw-regular);
            padding: 0.25rem var(--gutter-small) 0.25rem var(--gutter-small);
          }
          .toc-link:hover,
          .toc-link[data-current] {
            color: var(--text);
            text-decoration: underline;
          }
          @media screen and (max-width: 1000px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}

// function getClassNames({ current, prefix, level }) {
//   return [prefix, current ? `${prefix}--current` : null, level === 3 ? `${prefix}--inset` : null]
//     .filter(Boolean)
//     .join(' ');
// }
