import React from 'react';
import Link from 'next/link';

export function TableOfContents({ toc }) {
  const items = toc.filter(
    item => item.id && (item.level === 2 || item.level === 3) && item.title !== 'Next steps',
  );

  return (
    <nav role="navigation" className="toc">
      <h3 className="toc-title">On this page</h3>
      {items.length > 1 ? (
        <ul className="toc-list">
          {items.map(item => {
            const href = `#${item.id}`;
            const current = typeof window !== 'undefined' && window.location.hash === href;
            const itemClassName = getClassNames({ current, prefix: 'toc-item', level: item.level });
            const linkClassName = getClassNames({ current, prefix: 'toc-link', level: item.level });

            return (
              <li key={item.title} className={itemClassName}>
                <Link href={href} passHref>
                  <a className={linkClassName}>{item.title}</a>
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
            position: sticky;
            top: calc(var(--scroll-offset) + var(--header-height));
          }

          .toc-title {
            color: var(--text-prominent);
            font-weight: 500;
            font-size: var(--text-standard);
            margin: 0;
            padding-bottom: 0.75rem;
            padding-left: 1.5rem;
          }

          .toc-list {
            margin: 0;
            padding: 0;
          }
          .toc-item {
            font-size: var(--fs-small);
            list-style-type: none;
            margin: 0 0 1rem 1.5rem;
          }
          .toc-item--inset {
            font-size: var(--fs-small);
            padding-left: 1rem;
          }

          .toc-link {
            display: block;
            text-decoration: none;
          }
          .toc-link:hover,
          .toc-link--current {
            text-decoration: underline;
          }
          .toc-link--inset {
            color: var(--text);
            font-weight: 400;
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

function getClassNames({ current, prefix, level }) {
  return [prefix, current ? `${prefix}--current` : null, level === 3 ? `${prefix}--inset` : null]
    .filter(Boolean)
    .join(' ');
}
