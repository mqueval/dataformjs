import '@emotion/styled';

declare module '@emotion/react' {
  export interface Theme {
    colors: { [key: string]: string };
    defaultSpace: number;
    mobile: boolean;
    sizes: { [key: string]: string };
    spacing: { [key: string]: string };
    webapp: boolean;
  }
}
