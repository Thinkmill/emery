import React from 'react';

export function Container(props) {
  return (
    <>
      <div className="container" {...props} />
      <style jsx>
        {`
          .container {
            max-width: var(--page-max-width);
            margin-inline: auto;
          }
        `}
      </style>
    </>
  );
}
