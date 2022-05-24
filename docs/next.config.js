const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc({ schemaPath: 'docs/markdoc' })({
  pageExtensions: ['js', 'jsx', 'tsx', 'md'],
});
