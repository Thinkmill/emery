import React, { Children, isValidElement, ReactNode } from 'react';

type FeatureProps = { children: ReactNode; reverse?: boolean };

export const Feature = ({ children, reverse }: FeatureProps) => {
  const [fence, ...content] = flattenElements(children).reverse();

  return (
    <div className="feature" data-reverse={reverse}>
      <div className="feature-block feature-content">{content.reverse()}</div>
      <div className="feature-block feature-example dark">{fence}</div>
      <style jsx>{`
        .feature {
          margin-block: 6rem;
          padding-inline: var(--gutter);
        }

        @media screen and (min-width: 1001px) {
          .feature {
            display: flex;
            align-items: center;
            margin-inline: auto;
            max-width: var(--page-max-width);
          }
          .feature[data-reverse] {
            flex-direction: row-reverse;
          }
          .feature :global(.code-block) {
            margin: 0;
          }

          .feature-block {
            min-width: 0;
          }
          .feature-example {
            flex: 0 0 48%;
          }
          .feature-content {
            color: var(--text-muted);
            flex: 1 1 0;
            padding-inline: 6rem;
          }
        }
      `}</style>
    </div>
  );
};

function flattenElements(children: ReactNode) {
  return Children.toArray(children).filter(isValidElement);
}
