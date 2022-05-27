import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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

  return (
    <nav className="sidenav">
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
          .sidenav {
            padding: var(--scroll-offset) 0 var(--gutter-large) var(--gutter-medium);
          }
          @media screen and (max-width: 600px) {
            .sidenav {
              background: var(--surface);
              border-bottom: 1px solid var(--border);
            }
          }
          @media screen and (min-width: 601px) {
            .sidenav {
              /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
              flex: 0 0 var(--sidenav-width);
              height: calc(100vh - var(--header-height) - var(--footer-height));
              margin-bottom: calc(var(--footer-height) * -1);
              overflow-y: auto;
              position: sticky;
              top: var(--header-height);
            }
          }

          .sidenav-title {
            color: var(--text-prominent);
            font-weight: 500;
            font-size: var(--fs-standard);
            padding-bottom: 0.5rem;
          }
          .sidenav-list {
            border-left: 1px solid var(--border);
            font-size: var(--fs-small);
            margin: 0;
            padding: 0;
          }
          .sidenav-list:not(:last-child) {
            margin-bottom: var(--gutter-large);
          }
          .sidenav-item {
            list-style-type: none;
            margin: 0;
          }
          .sidenav-item:not(:first-child) {
            padding-top: 0.25rem;
          }
          .sidenav-item:not(:last-child) {
            padding-bottom: 0.25rem;
          }

          .sidenav-link {
            display: block;
            font-weight: 400;
            padding: 0.25rem 0.5rem 0.25rem 1rem;
            text-decoration: none;
          }
          .sidenav-link:hover {
            text-decoration: underline;
          }
          .sidenav-link--current {
            box-shadow: -1px 0 var(--text-prominent);
            color: var(--text-prominent);
            font-weight: 500;
          }
        `}
      </style>
    </nav>
  );
}
