import React from 'react';

import { AppLink as Link } from '../AppLink';
import { ThemeToggle } from '.';

export function Footer() {
  return (
    <div className="footer-bar">
      <footer className="footer">
        <Link href="https://www.thinkmill.com.au">by Thinkmill</Link>
        <ThemeToggle />
      </footer>
      <style jsx>
        {`
          .footer-bar {
            border-top: 1px solid var(--border);
          }

          .footer {
            color: var(--dark);
            display: flex;
            align-items: center;
            height: var(--footer-height);
            justify-content: space-between;
            margin-inline: auto;
            max-width: var(--page-max-width);
            padding: 1rem 2rem;
            position: relative;
            z-index: 100;
          }

          // brand
          .footer :global(a) {
            font-size: 0.85rem;
          }
        `}
      </style>
    </div>
  );
}
