import React from 'react';
import { Hidden } from '../Hidden';

type Mode = 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Mode | null>(null);

  function setPreferredTheme(newTheme: Mode) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {
      //
    }
  }

  React.useEffect(() => {
    let preferredTheme: Mode;
    try {
      preferredTheme = localStorage.getItem('theme') as Mode;
    } catch (err) {
      //
    }

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(e => setTheme(e.matches ? 'dark' : 'light'));

    // @ts-expect-error local storage weirdness
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  }, []);

  React.useEffect(() => {
    if (theme) {
      document.body.className = theme;
    }
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Dark mode' : 'Light mode'}
      className="theme-toggle"
      onClick={() => {
        setPreferredTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <Hidden below="tablet">
        <span>{isDark ? 'Dark mode' : 'Light mode'}</span>
      </Hidden>
      {isDark ? moon : sun}
      <style jsx>
        {`
          .theme-toggle {
            align-items: center;
            border-radius: var(--radii-small);
            color: var(--text-muted);
            display: flex;
            font-size: var(--fs-small);
            font-weight: var(--fw-medium);
            gap: var(--gutter-xsmall);
            justify-content: center;
            position: relative;
          }
          /* increase hitarea w/o undermining gutters */
          .theme-toggle::before {
            content: '';
            position: absolute;
            inset: calc(var(--gutter-xsmall) * -1);
          }

          .theme-toggle:hover {
            color: var(--text-prominent);
          }

          .theme-toggle:active :global(.theme-toggle-icon) {
            animation: rotate 150ms linear forwards;
          }
          :global(.theme-toggle-icon--sun) {
            animation: sun 400ms ease both;
          }
          :global(.theme-toggle-icon--sun-ray) {
            transform-origin: center;
            animation: rays 400ms ease both;
          }
          :global(.theme-toggle-icon--moon) {
            animation: moon 400ms ease both;
          }

          @keyframes rotate {
            from {
              transform: initial;
            }
            to {
              transform: scale(0.95) rotate(20deg);
            }
          }
          @keyframes sun {
            from {
              transform: scale(1.5);
            }
            to {
              transform: scale(1);
            }
          }
          @keyframes rays {
            from {
              transform: rotate(45deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
          @keyframes moon {
            from {
              transform: scale(0.6) rotate(90deg);
            }
            to {
              transform: scale(1) rotate(0deg);
            }
          }
        `}
      </style>
    </button>
  );
}

const sun = (
  <svg
    className="theme-toggle-icon theme-toggle-icon--sun"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="currentColor"
  >
    <circle cx="8.79932" cy="8" r="4" />
    <circle className="theme-toggle-icon--sun-ray" cx="8.79932" cy="1" r="1" />
    <circle className="theme-toggle-icon--sun-ray" cx="8.79932" cy="15" r="1" />
    <circle
      className="theme-toggle-icon--sun-ray"
      cx="1.79932"
      cy="8"
      r="1"
      transform="rotate(-90 1.79932 8)"
    />
    <circle
      className="theme-toggle-icon--sun-ray"
      cx="15.7993"
      cy="8"
      r="1"
      transform="rotate(-90 15.7993 8)"
    />
    <circle
      className="theme-toggle-icon--sun-ray"
      cx="3.84927"
      cy="3.05078"
      r="1"
      transform="rotate(-45 3.84927 3.05078)"
    />
    <circle
      className="theme-toggle-icon--sun-ray"
      cx="13.7487"
      cy="12.9503"
      r="1"
      transform="rotate(-45 13.7487 12.9503)"
    />
    <circle
      className="theme-toggle-icon--sun-ray"
      cx="3.84961"
      cy="12.9491"
      r="1"
      transform="rotate(-135 3.84961 12.9491)"
    />
    <circle
      className="theme-toggle-icon--sun-ray"
      cx="13.749"
      cy="3.04957"
      r="1"
      transform="rotate(-135 13.749 3.04957)"
    />
  </svg>
);

const moon = (
  <svg
    className="theme-toggle-icon theme-toggle-icon--moon"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3764 9.04656C11.2112 9.06022 11.0441 9.06718 10.8754 9.06718C7.56173 9.06718 4.87549 6.38093 4.87549 3.06728C4.87549 1.94653 5.18278 0.897541 5.71771 -1.22983e-05C2.52866 0.186293 0 2.83147 0 6.06725C0 9.42391 2.7211 12.145 6.07776 12.145C8.35189 12.145 10.3343 10.896 11.3764 9.04656Z"
    />
  </svg>
);
