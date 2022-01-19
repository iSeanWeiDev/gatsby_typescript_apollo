declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql';

  const value: {
    [key: string]: DocumentNode;
  };
  export = value;
}
