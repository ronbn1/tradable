import styled, { css } from "styled-components";
import { globalTheme } from "../../themes/globalStyls";
export const Container = styled.div`
   table {
      margin: 0 auto;
      width: 100%;
      tr {
         border-bottom: 1px solid #eeeeee30;
      }
      td,
      th {
         font-size: 0.9rem;
         color: ${({ mode }) => {
            return css`
               ${globalTheme.colors[mode].light}
            `;
         }};
         text-align: left;
         padding: 8px;
         text-align: center;
         font-family: ${globalTheme.font.family};
      }
      th {
         color: ${globalTheme.colors.darkMode.primary};
         font-size: 1rem;
      }
   }
`;
