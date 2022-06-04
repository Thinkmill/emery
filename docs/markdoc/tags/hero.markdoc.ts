import { MarkdocNextJsSchema } from '@markdoc/next.js';
import { Hero } from '../../components/tags/Hero';

/** Display a hero box. */
export const hero: MarkdocNextJsSchema = {
  render: Hero,
  children: ['fence', 'heading', 'paragraph'],
  attributes: {
    /** Influences the appearance of the hero box. */
    prominence: {
      type: String,
      default: 'tertiary',
      matches: ['primary', 'secondary', 'tertiary'],
      errorLevel: 'critical',
    },
  },
};
