import { MarkdocNextJsSchema } from '@markdoc/next.js';
import { Callout, calloutTones } from '../../components/Callout';

/** Display the enclosed content in a callout box. */
export const callout: MarkdocNextJsSchema = {
  render: Callout,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    /** Controls the color and icon of the callout. */
    tone: {
      type: String,
      default: 'neutral',
      matches: calloutTones,
      errorLevel: 'critical',
    },
  },
};
