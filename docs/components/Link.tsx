import React, { AllHTMLAttributes } from 'react';
import NextLink from 'next/link';

type AnchorProps = AllHTMLAttributes<HTMLAnchorElement>;
type LinkProps = {
  children: AnchorProps['children'];
  className?: AnchorProps['className'];
  href: string;
  target?: AnchorProps['target'];
};

export function Link(props: LinkProps) {
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
