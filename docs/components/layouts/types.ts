import { ReactNode } from 'react';
import { MarkdocNextJsPageProps } from '@markdoc/next.js';

export type LayoutProps = { children: ReactNode; markdoc: MarkdocNextJsPageProps['markdoc'] };
