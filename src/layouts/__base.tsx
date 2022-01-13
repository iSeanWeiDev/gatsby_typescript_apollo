import React from 'react';
import SEO from '@/components/SEO';
import { IBaseLayoutProps } from '@/types';

function BaseLayout({
  title,
  description,
  meta,
  lang,
  children,
}: IBaseLayoutProps) {
  return (
    <div className="layout-wrapper">
      <SEO description={description} title={title} lang={lang} meta={meta} />
      <main>{children}</main>
    </div>
  );
}

export default BaseLayout;
