import * as React from 'react';

import { Icon } from '../Icon';

const iconMap = {
  neutral: 'information-circle',
  warning: 'warning',
  positive: 'checkmark-circle',
  critical: 'warning',
} as const;

export const calloutTones = Object.keys(iconMap);

type CalloutProps = {
  children: React.ReactNode;
  tone: keyof typeof iconMap;
};

export function Callout({ children, tone = 'neutral' }: CalloutProps) {
  const icon = iconMap[tone];

  return (
    <div className="callout" data-tone={tone}>
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
          .callout[data-tone='neutral'] .icon {
            color: var(--info);
          }
          .callout[data-tone='warning'] .icon {
            color: var(--warning);
          }
          .callout[data-tone='critical'] .icon {
            color: var(--critical);
          }
          .callout[data-tone='positive'] .icon {
            color: var(--positive);
          }
        `}
      </style>
    </div>
  );
}
