import React from 'react';

export function Hidden({ above, below, children }) {
  const className = getClassNames({ above, below, children });

  if (!React.isValidElement(children)) {
    throw TypeError('`Hidden` expects a React element child.');
  }

  return React.cloneElement(children, { className });
}

function getClassNames({ above, below, children }) {
  return [
    children?.props?.className,
    above && `hidden-above-${above}`,
    below && `hidden-below-${below}`,
  ]
    .filter(Boolean)
    .join(' ');
}
