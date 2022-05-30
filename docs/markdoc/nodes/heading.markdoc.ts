import { MarkdocNextJsSchema } from '@markdoc/next.js';
import { Config, Node, RenderableTreeNode, Tag } from '@markdoc/markdoc';

import { Heading } from '../../components/Heading';

export const heading: MarkdocNextJsSchema = {
  render: Heading,
  children: ['inline'],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
    className: { type: String },
  },
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    // NOTE: would prefer "ts-expect-error", but next.js fails to compile:
    // Type error: Unused '@ts-expect-error' directive.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Tag(this.render, { ...attributes, id }, children);
  },
};

function generateID(children: RenderableTreeNode[], attributes: Record<string, unknown>) {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id;
  }
  return children
    .filter(child => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/[A-Z]/g, s => '-' + s)
    .replace(/\s+/g, '-')
    .replace(/^-/, '')
    .toLowerCase();
}
