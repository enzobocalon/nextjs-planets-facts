import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string,
    activeColor: string,
    borderColor: string,
    hoverColor: string,
    fontColor: string,
    contentFont: string,
    titleFont: string
  }
}
