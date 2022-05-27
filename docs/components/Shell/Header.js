import React from 'react';

import { AppLink as Link } from '../AppLink';

export function Header() {
  return (
    <div className="nav-bar">
      <nav>
        <Link href="/" className="brand">
          TS Runtime DX
        </Link>
        <ul>
          <li>
            <Link href="/docs/getting-started">Docs</Link>
          </li>
          <li>
            <Link href="https://github.com/thinkmill/ts-runtime-dx">GitHub &rarr;</Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          .nav-bar {
            background: var(--light);
            border-bottom: 1px solid var(--border);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 100;
          }
          nav {
            display: flex;
            align-items: center;
            gap: 1rem;
            height: var(--header-height);
            justify-content: space-between;
            margin-inline: auto;
            max-width: var(--page-max-width);
          }
          nav :global(a) {
            display: block;
            padding-block: 1rem;
            text-decoration: none;
          }

          nav :global(.brand) {
            padding-inline: 2rem;
          }

          ul {
            list-style: none;
            display: flex;
            gap: 1.3rem;
            padding-right: 2rem;
          }
          li {
            margin: 0;
          }
          @media screen and (min-width: 1001px) {
            ul {
              flex: 0 0 var(--sidenav-width);
              padding-left: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
