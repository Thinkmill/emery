import React from 'react';
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
      {items.map(item => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map(link => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--header-height);
            height: calc(100vh - (var(--header-height) + var(--footer-height)));
            flex: 0 0 var(--sidenav-width);
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            font-size: 1rem;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            font-size: 0.85rem;
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0;
          }
          li a {
            display: block;
            font-weight: 400;
            text-decoration: none;
            padding: 0.35rem 0 0.35rem 0.7rem;
          }
          li a:hover {
            text-decoration: underline;
          }
          li.active > a {
            color: var(--blue);
            font-weight: 500;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
