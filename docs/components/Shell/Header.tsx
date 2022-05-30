import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { joinClasses } from '../../utils';
import { Hidden } from '../Hidden';

import { Link } from '../Link';
import { useSidenav } from './SideNav';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const router = useRouter();
  const isDocs = router.pathname.startsWith('/docs');
  const [sidenavOpen, setSidenavOpen] = useSidenav();

  return (
    <div className="navbar" data-page-type={isDocs ? 'docs' : 'landing'}>
      <nav className="nav">
        <Hidden below="mobile">
          <div className="brand-wrapper">
            <Link href="/" className="brand">
              TS Runtime DX
            </Link>
          </div>
        </Hidden>
        <div className="nav-sections">
          <ul className="nav-list">
            <Hidden above="mobile">
              <li className="nav-list-item">
                <Link className="nav-list-link" href="/">
                  Home
                </Link>
              </li>
            </Hidden>
            <li className="nav-list-item">
              <Link className="nav-list-link" href="/docs/getting-started">
                Docs
              </Link>
            </li>
            <Hidden below="mobile">
              <li className="nav-list-item">
                <Link
                  className="nav-list-link"
                  href="https://github.com/thinkmill/ts-runtime-dx/discussions"
                >
                  Community
                </Link>
              </li>
            </Hidden>
            <li className="nav-list-item">
              <Link className="nav-list-link" href="https://github.com/thinkmill/ts-runtime-dx">
                GitHub
              </Link>
            </li>
          </ul>
          <div className="nav-controls">
            <ThemeToggle />
            {isDocs && (
              <Hidden above="mobile">
                <button className="menu-button" onClick={() => setSidenavOpen(bool => !bool)}>
                  <Hamburger active={sidenavOpen} />
                </button>
              </Hidden>
            )}
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar {
            background: var(--light);
            border-bottom: 1px solid var(--border);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 100;
          }
          .nav {
            display: flex;
            font-size: 0.9rem;
            font-weight: var(--fw-medium);
            height: var(--header-height);
            margin-inline: auto;
            max-width: var(--page-max-width);
          }

          .nav-sections {
            display: flex;
            flex: 1;
            padding-inline: var(--gutter);
            justify-content: space-between;
          }

          @media screen and (min-width: 1001px) {
            .navbar[data-page-type='landing'] .nav-sections {
              max-width: 800px;
              margin-inline: auto;
            }
            .navbar[data-page-type='docs'] .nav-sections {
              margin-right: var(--sidenav-width);
            }
          }

          .brand-wrapper {
            align-items: center;
            display: flex;
            flex: 0 0 var(--sidenav-width);
            padding-left: 2rem;
          }
          [data-page-type='landing'] .brand-wrapper {
            display: none;
          }

          .nav-list {
            display: flex;
            list-style-type: none;
            gap: var(--gutter-small);
          }
          .nav-list-item {
            display: flex;
            align-items: center;
          }
          :global(.nav-list-link) {
            color: var(--text-muted);
            position: relative;
          }
          /* increase hitarea w/o undermining gutters */
          :global(.nav-list-link::before) {
            content: '';
            position: absolute;
            inset: calc(var(--gutter-xsmall) * -1);
          }
          :global(.nav-list-link:hover) {
            color: var(--text-prominent);
          }

          .nav-controls {
            align-items: center;
            display: flex;
            gap: var(--gutter-small);
          }

          .menu-button {
            color: var(--text-muted);
            line-height: 0;
            position: relative;
          }
          .menu-button:hover {
            color: var(--text-prominent);
          }
          /* increase hitarea w/o undermining gutters */
          .menu-button::before {
            content: '';
            position: absolute;
            inset: calc(var(--gutter-xsmall) * -1);
          }

          /*
          @media screen and (min-width: 1001px) {
            ul {
              flex: 0 0 var(--sidenav-width);
              padding-left: 1.5rem;
            }
          }
          */
        `}
      </style>
    </div>
  );
}

const Hamburger = ({ active }: { active?: boolean }) => {
  const className = joinClasses(['hamburger', active && 'hamburger--active']);

  return (
    <svg
      className={className}
      fill="none"
      height="16"
      width="16"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {useMemo(
        () =>
          ['top', 'middle', 'bottom'].map((pos, idx) => (
            <line
              key={pos}
              x1="2"
              y1={(idx + 1) * 6}
              x2="22"
              y2={(idx + 1) * 6}
              className={`hamburger-line hamburger-line--${pos}`}
            />
          )),
        [],
      )}
      <style jsx>{`
        .hamburger {
          transition: 250ms ease;
        }
        .hamburger--active {
          transform: rotate(90deg);
        }
        .hamburger-line {
          transition: 250ms ease;
        }
        .hamburger--active .hamburger-line--top {
          transform-origin: 4px 8px;
          transform: translateX(1px) rotate(45deg);
        }
        .hamburger--active .hamburger-line--middle {
          opacity: 0;
        }
        .hamburger--active .hamburger-line--bottom {
          transform-origin: 4px 16px;
          transform: translateX(1px) rotate(-45deg);
        }
      `}</style>
    </svg>
  );
};
