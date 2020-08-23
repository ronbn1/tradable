import styled from "styled-components";
import { globalTheme } from "../../themes/globalStyls";

export const Container = styled.div`
   height: 3rem;
   margin-top: 1rem;
   background-color: ${({ mode }) => {
      const color = mode
         ? globalTheme.colors.darkMode.light + 10
         : globalTheme.colors.lightMode.secondary + 20;
      return color;
   }};
   border-radius: 10px;
   display: flex;
   justify-content: space-between;
`;
export const Item = styled.div`
   line-height: 3rem;
   color: ${({ mode }) => {
      const color = mode
         ? globalTheme.colors.darkMode.light
         : globalTheme.colors.lightMode.dark;
      return color;
   }};
   font-family: "Roboto";
   margin: 0.2rem 1rem;
   border-bottom: ${({ active, mode }) => {
      const color = mode
         ? globalTheme.colors.darkMode.light
         : globalTheme.colors.lightMode.dark;
      return active && `1px solid ${color}`;
   }};
   cursor: pointer;
`;
export const IconContainer = styled.div`
   display: flex;
   align-items: center;
`;
export const LinksContainer = styled.div`
   display: flex;
`;
