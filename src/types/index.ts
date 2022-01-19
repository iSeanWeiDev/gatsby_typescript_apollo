import { ReactNode } from 'react';

export interface BaseComponentProps {
  children?: ReactNode;
}

type MetaObj = {
  name: string;
  content: string;
};

export interface IBaseLayoutProps {
  title: string;
  description: string;
  meta?: Array<MetaObj>;
  lang?: string;
  children: React.ReactNode | Array<React.ReactNode>;
}

export interface ILabelValuePair {
  label: string;
  value: string | number;
}
