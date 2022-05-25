import * as React from 'react';
import { useRouter } from 'next/router';

export function Heading({ id = '', level = 1, children, className }) {
  const router = useRouter();
  const Component = `h${level}`;
  const isDocs = router.pathname.startsWith('/docs');
  const link =
    isDocs && level !== 1 ? (
      <a href={`#${id}`} aria-label="Anchor" className="heading-link" />
    ) : null;

  return (
    <Component className={['heading', className].filter(Boolean).join(' ')} id={id}>
      {link}
      <span>{children}</span>
    </Component>
  );
}
