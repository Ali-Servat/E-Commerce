// import original module declarations
import "styled-components";

// extend theme
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      red: string;
    };
  }
}
