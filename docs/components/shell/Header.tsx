import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { joinClasses } from '../../utils';
import { Hidden } from '../Hidden';

import { Link } from '../Link';
import { useSidenav } from './SideNav';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const isDocs = router.pathname.startsWith('/docs');
  const [sidenavOpen, setSidenavOpen] = useSidenav();

  return (
    <header className="navbar" data-page-type={isDocs ? 'docs' : 'landing'}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item nav-list-item--brand">
            {isHome ? (
              <Brand />
            ) : (
              <Link href="/">
                <Brand />
              </Link>
            )}
          </li>
          <li className="nav-list-item">
            <Link className="nav-list-link" href="/docs/getting-started">
              Docs
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-list-link" href="https://github.com/thinkmill/emery/discussions">
              Community
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-list-link" href="https://github.com/thinkmill/emery">
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
      </nav>
      <style jsx>
        {`
          .nav {
            display: flex;
            font-size: 0.9rem;
            font-weight: var(--fw-medium);
            height: var(--header-height);
            margin-inline: auto;
            max-width: var(--page-max-width);
            display: flex;
            flex: 1;
            padding-inline: var(--gutter);
            justify-content: space-between;
          }
          .navbar[data-page-type='docs'] {
            border-bottom: 1px solid var(--border);
            background: var(--light);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 100;
          }

          @media screen and (min-width: 1001px) {
            .navbar[data-page-type='docs'] .nav-controls {
              margin-right: var(--sidenav-width);
            }
          }

          .nav-list-item--brand {
            align-items: center;
            display: flex;
          }

          @media screen and (min-width: 601px) {
            .navbar[data-page-type='docs'] .nav-list-item--brand {
              flex: 0 0 calc(var(--sidenav-width) - var(--gutter-small));
            }
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
        `}
      </style>
    </header>
  );
}

// Styled components
// ------------------------------

const Brand = () => {
  return (
    <div className="brand">
      <span className="brand-mark">{logo}</span>
      <span className="brand-text">Emery</span>
      <style jsx>{`
        :global(.brand) {
          display: flex;
          align-items: center;
          align-self: stretch;
          gap: 8px;
        }
        .brand-mark {
          height: 24px;
        }
        .brand-mark :global(svg) {
          width: auto;
          height: 100%;
        }
        @media screen and (max-width: 600px) {
          .brand-text {
            border-width: 0;
            clip: rect(0, 0, 0, 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            white-space: nowrap;
            width: 1px;
          }
        }
      `}</style>
    </div>
  );
};
const logo = (
  <svg viewBox="0 0 180 135" fill="none">
    <path
      d="M134.982 0.000244141L179.966 45.0015L90.0023 134.999L0.0366211 44.9991L45.0183 0.000244141L134.982 0.000244141Z"
      fill="#358EF1"
    />
    <path
      d="M90.0023 44.9998L134.984 89.9986L90.0023 134.997L45.0208 89.9986L90.0023 44.9998Z"
      fill="#3178C6"
    />
    <path d="M45.0172 -0.00012207L90 44.9999H0.0344238L45.0172 -0.00012207Z" fill="#3178C6" />
    <path d="M134.983 -0.00012207L179.966 44.9999H90L134.983 -0.00012207Z" fill="#3178C6" />
    <g style={{ mixBlendMode: 'screen' }} opacity="0.5">
      <path d="M180 45.0343L135 90.0515H45L0 45.0343H180Z" fill="#00273F" />
    </g>
    <g style={{ mixBlendMode: 'hard-light' }} opacity="0.3">
      <path d="M89.9999 135L134.983 44.9999H45.0171L89.9999 135Z" fill="#00273F" />
      <path d="M89.9999 -0.00012207L134.983 44.9999H45.0171L89.9999 -0.00012207Z" fill="#BAE6FD" />
    </g>
    <path
      d="M134.771 29.1757C139.478 42.8057 136.753 40.0797 150.378 44.7882C136.753 49.4968 139.478 46.7708 134.771 60.4008C130.065 46.7708 132.79 49.4968 119.165 44.7882C132.79 40.0797 130.065 42.8057 134.771 29.1757Z"
      fill="#FFFFFF"
    />
  </svg>
);

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
