import React, { createContext, Fragment, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const navID = 'docs-navigation';

const items = [
  {
    title: 'About',
    links: [
      { href: '/docs/getting-started', children: 'Getting started' },
      { href: '/docs/origin-story', children: 'Origin story' },
    ],
  },
  {
    title: 'Concepts',
    links: [
      { href: '/docs/assertions', children: 'Assertions' },
      { href: '/docs/checks', children: 'Checks' },
      { href: '/docs/guards', children: 'Guards' },
      { href: '/docs/opaques', children: 'Opaques' },
      { href: '/docs/utils', children: 'Utils' },
    ],
  },
];

export function SideNav() {
  const router = useRouter();
  const [sidenavOpen, setSidenavOpen] = useSidenav();

  return (
    <nav className="sidenav" data-open={sidenavOpen} id={navID}>
      {items.map(item => {
        return (
          <Fragment key={item.title}>
            <h3 className="sidenav-title">{item.title}</h3>
            <ul className="sidenav-list">
              {item.links.map(link => {
                const current = router.pathname === link.href;

                return (
                  <li
                    key={link.href}
                    className={current ? 'sidenav-item sidenav-item--current' : 'sidenav-item'}
                  >
                    <Link {...link}>
                      <a
                        href={link.href}
                        className={current ? 'sidenav-link sidenav-link--current' : 'sidenav-link'}
                        onClick={() => setSidenavOpen(false)}
                      >
                        {link.children}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        );
      })}
      <style jsx>
        {`
          @media screen and (max-width: 600px) {
            .sidenav {
              background: var(--light);
              border-bottom: 1px solid var(--border);
              padding: var(--gutter);
              position: fixed;
              width: 100%;
              z-index: 20;
            }
            .sidenav[data-open='true'] {
              display: block;
            }
            .sidenav[data-open='false'] {
              display: none;
            }
          }
          @media screen and (min-width: 601px) {
            .sidenav {
              flex: 0 0 var(--sidenav-width);
              height: calc(100vh - var(--header-height));
              overflow-y: auto;
              padding: var(--scroll-offset) 0 var(--gutter) var(--gutter);
              position: sticky;
              top: var(--header-height);
            }
          }

          .sidenav-title {
            color: var(--text-prominent);
            font-weight: var(--fw-medium);
            font-size: var(--fs-standard);
            margin-bottom: var(--vertical-rhythm-prominent);
          }

          .sidenav-list {
            font-size: var(--fs-small);
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
          .sidenav-list:not(:last-child) {
            margin-bottom: var(--gutter);
          }

          .sidenav-item {
            position: relative;
            border-left: 1px solid var(--border);
          }
          .sidenav-item::before {
            content: '';
            position: absolute;
            width: 3px;
            left: -2px;
            top: 0;
            bottom: 0;
            border-radius: 3px;
            z-index: 2;
          }
          .sidenav-item--current::before {
            background-color: var(--brand);
          }
          .sidenav-item:not(:first-child) {
            padding-top: 0.25rem;
          }
          .sidenav-item:not(:last-child) {
            padding-bottom: 0.25rem;
          }

          .sidenav-link {
            display: block;
            font-weight: var(--fw-regular);
            padding: 0.25rem 0.5rem 0.25rem 1rem;
            text-decoration: none;
          }
          .sidenav-link:hover {
            text-decoration: underline;
          }
          .sidenav-link--current {
            color: var(--text-prominent);
            font-weight: var(--fw-medium);
          }
        `}
      </style>
    </nav>
  );
}

// Context
// ------------------------------

type SideNavContextType = ReturnType<typeof useSidenavState>;
export const SideNavContext = createContext<SideNavContextType | null>(null);
export const useSidenav = () => {
  const ctx = useContext(SideNavContext);

  if (!ctx) {
    throw Error('Attempt to use `SideNavContext` outside of its provider.');
  }

  return ctx;
};
export const useSidenavState = () => useState(false);
