import React, { Children, ReactNode } from 'react';

type HeroProps = { children: ReactNode; prominence: 'primary' | 'secondary' | 'tertiary' };

export const Hero = ({ children, prominence = 'tertiary' }: HeroProps) => {
  const headingOnly = Children.count(children) === 1;
  return (
    <div className="hero" data-prominence={prominence}>
      <div className="hero-content">{children}</div>
      {prominence === 'primary' ? <Fold /> : null}

      <style jsx>{`
        .hero {
          color: var(--text-muted);
          font-size: var(--fs-large);
        }
        .hero[data-prominence='secondary'] {
          background: var(--surface);
        }
        .hero-content {
          padding: 6rem var(--gutter) ${headingOnly ? 0 : '6rem'};
          margin-inline: auto;
          max-width: calc(var(--page-max-width) - var(--sidenav-width) * 2);
          text-align: center;
        }

        .hero :global(.heading) {
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  );
};

const Fold = () => {
  return (
    <div className="fold" role="separator">
      {logo}
      <style jsx>{`
        .fold {
          display: flex;
          height: 6vw;
          justify-content: center;
          max-height: 120px;
          min-height: 60px;
          position: relative;
        }
        .fold::before {
          background: var(--border-prominent);
          content: ' ';
          position: absolute;
          top: 33.33%;
          width: 100%;
          height: 1px;
        }
        .fold :global(.logo) {
          background: var(--light);
          padding-inline: 2vw;
          position: relative;
        }
      `}</style>
    </div>
  );
};

const logo = (
  <svg viewBox="0 0 180 135" fill="none" className="logo">
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
