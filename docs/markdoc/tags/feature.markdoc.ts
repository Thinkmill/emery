import { MarkdocNextJsSchema } from '@markdoc/next.js';
import { Feature } from '../../components//tags/Feature';

/** Display a feature box. */
export const feature: MarkdocNextJsSchema = {
  render: Feature,
  children: ['fence', 'heading', 'list', 'paragraph'],
  attributes: {
    /** Controls the horizontal layout direction on large devices. */
    reverse: {
      type: Boolean,
    },
  },
};
