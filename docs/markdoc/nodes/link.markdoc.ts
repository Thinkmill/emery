// @ts-expect-error markdocs doesn't yet expose this properly
import { link as nextLink } from '@markdoc/next.js/tags';
import { MarkdocNextJsSchema } from '@markdoc/next.js';

import { Link } from '../../components/Link';

export const link: MarkdocNextJsSchema = {
  ...nextLink,
  render: Link,
};
