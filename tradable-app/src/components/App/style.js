import styled, { css } from "styled-components";
import { globalTheme } from "../../themes/globalStyls";

export const Container = styled.div`
   display: flex;
   background: ${({ mode }) => {
      return css`
      globalTheme.colors.[mode].backgroundOne
   `;
   }};
   height: 100%;
   background: ${({ mode }) => {
      return css`
      radial-gradient(
      circle,
      ${globalTheme.colors[mode].backgroundOne} 0%,
      ${globalTheme.colors[mode].backgroundTwo} 100%
   )
   `;
   }};
`;

export const Main = styled.div`
   display: flex;
   flex-direction: column;
`;
