import React from 'react';
import BaseLayout from './__base';
import { IBaseLayoutProps } from '@/types';
import { AppNavbar, AppFooter } from '@/components/App';
import '@/assets/styles/index.scss';

interface IAppLayoutProps extends IBaseLayoutProps {
  className: string;
}

function AppLayout({
  title,
  description,
  meta,
  lang,
  className,
  children,
}: IAppLayoutProps) {
  return (
    <BaseLayout title={title} description={description} meta={meta} lang={lang}>
      <AppNavbar />
      <main className={`app-layout-main ${className}`}>{children}</main>
      <AppFooter />
    </BaseLayout>
  );
}

export default AppLayout;
