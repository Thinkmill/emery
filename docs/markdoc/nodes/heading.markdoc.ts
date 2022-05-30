import { Config, Node, RenderableTreeNode, Tag } from '@markdoc/markdoc';
import { Heading } from '../../components/Heading';

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

export default {
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

    // @ts-expect-error markdoc types don't yet cover this
    return new Tag(this.render, { ...attributes, id }, children);
  },
};
