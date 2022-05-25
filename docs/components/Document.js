import React from 'react';

export function Document({ children }) {
  /**
   * Typically you would just render children here, but we are adding
   * this extra branch in order to pop up the editor that reveals
   * the source content for each document
   */
  return (
    <article>
      {children}
      <style jsx>{`
        article {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          max-width: 100%;
          min-width: 0;
          padding: 2rem 2rem 3rem;
        }
      `}</style>
    </article>
  );
}
