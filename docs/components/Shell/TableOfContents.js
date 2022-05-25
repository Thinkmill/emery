import React from 'react';
import Link from 'next/link';

export function TableOfContents({ toc }) {
  const items = toc.filter(
    item => item.id && (item.level === 2 || item.level === 3) && item.title !== 'Next steps',
  );
  return (
    <nav className="toc">
      {items.length > 1 ? (
        <ul className="flex column">
          {items.map(item => {
            const href = `#${item.id}`;
            const active = typeof window !== 'undefined' && window.location.hash === href;
            return (
              <li
                key={item.title}
                className={[active ? 'active' : undefined, item.level === 3 ? 'padded' : undefined]
                  .filter(Boolean)
                  .join(' ')}
              >
                <Link href={href} passHref>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: calc(2.5rem + var(--header-height));
            max-height: calc(100vh - var(--header-height));
            flex: 0 0 var(--sidenav-width);
            /* https://stackoverflow.com/questions/44446671/my-position-sticky-element-isnt-sticky-when-using-flexbox */
            align-self: flex-start;
            margin-bottom: 1rem;
            padding: 0.25rem 0 0;
            border-left: 1px solid var(--border);
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 1rem 1.5rem;
            font-size: 0.85rem;
          }
          li a {
            display: block;
            text-decoration: none;
          }
          li a:hover,
          li.active a {
            text-decoration: underline;
          }
          li.padded {
            padding-left: 1rem;
          }
          li.padded a {
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
