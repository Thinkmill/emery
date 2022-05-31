import withMarkdoc from '@markdoc/next.js';

const markdocConfig = { schemaPath: 'docs/markdoc' };

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md'],

  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: false,
      },
    ];
  },
};

export default withMarkdoc(markdocConfig)(nextConfig);
