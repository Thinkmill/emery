import React from 'react';

import { AppLink as Link } from '../AppLink';
import { ThemeToggle } from '.';

export function Footer() {
  const copyright = <Link href="https://www.thinkmill.com.au">by Thinkmill</Link>;
  const toggle = <ThemeToggle />;

  return (
    <div className="footer-bar">
      <footer className="footer">
        <div className="left gap">{copyright}</div>
        <div className="right gap">{toggle}</div>
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
        `}
      </style>
    </div>
  );
}
