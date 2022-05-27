const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc({ schemaPath: 'docs/markdoc' })({
  pageExtensions: ['js', 'md', 'mdoc'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: false,
      },
    ];
  },
});
