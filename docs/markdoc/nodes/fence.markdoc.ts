import { MarkdocNextJsSchema } from '@markdoc/next.js';
import { Fence } from '../../components/nodes/Fence';

export const fence: MarkdocNextJsSchema = {
  render: Fence,
  attributes: {
    content: { type: String },
    /** The programming language of the code block. Place it after the backticks. */
    language: { type: String },
  },
};
