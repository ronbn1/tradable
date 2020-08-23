import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`;

export const globalTheme = {
   font: {
      family: "Roboto",
   },

   colors: {
      darkMode: {
         primary: "#ee6c4d",
         backgroundOne: "#033145",
         backgroundTwo: "#061839",
         cardBackground: "#152440a0",
         secondary: "#3d5a80",
         success: "#3bceac",
         dark: "#152945",
         darker: "#171138",
         light: "#eeeeee",
         selected: "#152844",
         text: "#eeeeee",
      },
      lightMode: {
         primary: "#ee6c4d",
         backgroundOne: "#FFFFFF",
         backgroundTwo: "#3d5a8",
         cardBackground: "#152440a0",
         secondary: "#3d5a80",
         success: "#3bceac",
         dark: "#152945",
         darker: "#171138",
         light: "#152945",
         selected: "#15284450",
         text: "#171138",
      },
   },
};
export default GlobalStyle;
