import * as React from 'react';
import { joinClasses } from '../utils';

type Break = 'mobile' | 'tablet';
type HiddenProps = { above?: Break; below?: Break; children: React.ReactElement<HTMLElement> };

export function Hidden({ above, below, children }: HiddenProps) {
  const className = joinClasses([
    children?.props?.className,
    above && `hidden-above-${above}`,
    below && `hidden-below-${below}`,
  ]);

  if (!React.isValidElement(children)) {
    throw TypeError('`Hidden` expects a React element child.');
  }

  return React.cloneElement(children, { className });
}
