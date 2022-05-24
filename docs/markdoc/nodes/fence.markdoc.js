import { CodeFence } from '../../components/CodeFence';

export default {
  render: CodeFence,
  attributes: {
    content: { type: String },
    language: {
      type: String,
      description: 'The programming language of the code block. Place it after the backticks.',
    },
  },
};
