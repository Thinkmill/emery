import * as React from 'react';

import { Icon } from './Icon';

const iconMap = {
  info: 'information-circle',
  warning: 'warning',
  positive: 'checkmark-circle',
  critical: 'warning',
} as const;

export const calloutTypeKeys = Object.keys(iconMap);

type CalloutProps = {
  children: React.ReactNode;
  type: keyof typeof iconMap;
};

export function Callout({ children, type }: CalloutProps) {
  const icon = iconMap[type] || iconMap.info;

  return (
    <div className="callout" data-type={type}>
      <div className="icon">
        <Icon icon={icon} />
      </div>
      <div className="content">{children}</div>
      <style jsx>
        {`
          .callout {
            align-items: center;
            display: flex;
            gap: var(--gutter-xsmall);
            font-weight: var(--fw-medium);
            margin-block: var(--vertical-rhythm-prominent);
          }
          .callout :global(p:first-child) {
            margin-top: 0;
          }
          .callout :global(p:last-child) {
            margin-bottom: 0;
          }

          .icon {
            font-size: 1.6rem;
            line-height: 0;
          }
          .callout[data-type='info'] .icon {
            color: var(--info);
          }
          .callout[data-type='warning'] .icon {
            color: var(--warning);
          }
          .callout[data-type='critical'] .icon {
            color: var(--critical);
          }
          .callout[data-type='positive'] .icon {
            color: var(--positive);
          }
        `}
      </style>
    </div>
  );
}
