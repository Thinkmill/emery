// @ts-expect-error markdocs doesn't yet expose this properly
import { link } from '@markdoc/next.js/tags';

import { Link } from '../../components/Link';

export default {
  ...link,
  render: Link,
};
