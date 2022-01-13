import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />
      </Helmet>
      <AppNavbar />
      <main className={className}>{children}</main>
      <AppFooter />
    </BaseLayout>
  );
}

export default AppLayout;
