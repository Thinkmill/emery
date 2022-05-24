import * as React from 'react';

import { Icon } from './Icon';

const TYPE_MAP = {
  info: {
    icon: 'information-circle',
    iconColor: 'var(--info)',
  },
  warning: {
    icon: 'warning',
    iconColor: 'var(--warning)',
  },
  positive: {
    icon: 'checkmark-circle',
    iconColor: 'var(--positive)',
  },
  critical: {
    icon: 'warning',
    iconColor: 'var(--critical)',
  },
};

export const calloutTypeKeys = Object.keys(TYPE_MAP);

export function Callout({ children, type }) {
  const { icon, iconColor } = TYPE_MAP[type] || TYPE_MAP.info;

  return (
    <div className="callout">
      <div className="icon">
        <Icon icon={icon} color={iconColor} />
      </div>
      <div className="content">{children}</div>
      <style jsx>
        {`
          .callout {
            display: flex;
            gap: 8px;
            margin-bottom: var(--default-vertical-spacing);
          }
          .content {
            color: var(--dark);
            font-weight: 500;
            // font-size: 0.9rem;
          }
          .icon {
            font-size: 1.6rem;
          }
        `}
      </style>
    </div>
  );
}
