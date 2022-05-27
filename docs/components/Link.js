import React from 'react';
import NextLink from 'next/link';

export function Link(props) {
  const target = props.target || (props.href.startsWith('http') ? '_blank' : undefined);

  return (
    <NextLink {...props} passHref>
      <a
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        className={props.className}
      >
        {props.children}
      </a>
    </NextLink>
  );
}
