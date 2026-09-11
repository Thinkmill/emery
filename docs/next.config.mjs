import withMarkdoc from '@markdoc/next.js';

const markdocConfig = { schemaPath: 'docs/markdoc' };
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  basePath,
  pageExtensions: ['ts', 'tsx', 'md'],
  trailingSlash: true,
};

export default withMarkdoc(markdocConfig)(nextConfig);
