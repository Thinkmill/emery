import { MarkdocNextJsSchema } from '@markdoc/next.js';
import { CodeFence } from '../../components/CodeFence';

export const fence: MarkdocNextJsSchema = {
  render: CodeFence,
  attributes: {
    content: { type: String },
    /** The programming language of the code block. Place it after the backticks. */
    language: { type: String },
  },
};
