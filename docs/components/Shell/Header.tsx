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
        <div className="nav-sections">
          <ul className="nav-list">
            <li className="nav-list-item nav-list-item--brand">
              {isDocs ? (
                <Link href="/">
                  <Brand />
                </Link>
              ) : (
                <Brand />
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
    </div>
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
        .brand-text {
          font-weight: var(--fw-bold);
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
  <svg viewBox="0 0 366 273" fill="none">
    <path
      d="M273.991 0.000915527L364.993 91.0034L182.998 272.999L0.997314 90.9987L91.9951 0.000915527L273.991 0.000915527Z"
      fill="#358EF1"
    />
    <path d="M182.998 91L273.995 181.998L182.998 272.995L92 181.998L182.998 91Z" fill="#3178C6" />
    <path d="M91.9929 0.000183105L182.993 91.0002H0.99292L91.9929 0.000183105Z" fill="#3178C6" />
    <path d="M273.993 0.000183105L364.993 91.0002H182.993L273.993 0.000183105Z" fill="#3178C6" />
    <g style={{ mixBlendMode: 'screen' }} opacity="0.5">
      <path d="M365.062 91.0697L274.028 182.105H91.9581L0.92334 91.0697H365.062Z" fill="#00273F" />
    </g>
    <g style={{ mixBlendMode: 'hard-light' }} opacity="0.25">
      <path d="M182.993 273L273.993 91.0002H91.9929L182.993 273Z" fill="#00273F" />
      <path d="M182.993 0.000183105L273.993 91.0002H91.9929L182.993 0.000183105Z" fill="#BAE6FD" />
    </g>
    <path
      d="M273.565 59.0001C283.087 86.563 277.574 81.0504 305.137 90.5722C277.574 100.094 283.087 94.5813 273.565 122.144C264.044 94.5813 269.556 100.094 241.993 90.5722C269.556 81.0504 264.044 86.563 273.565 59.0001Z"
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
