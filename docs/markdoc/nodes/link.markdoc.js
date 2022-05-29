import { link } from '@markdoc/next.js/tags';

import { Link } from '../../components/Link';

export default {
  ...link,
  render: Link,
};
