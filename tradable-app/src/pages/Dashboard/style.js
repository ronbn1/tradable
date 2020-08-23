import styled from "styled-components";
import { globalTheme } from "../../themes/globalStyls";
export const Container = styled.div`
   padding: 1rem 4rem;

   table {
      margin: 0 auto;
      width: 100%;
      tr {
         border-bottom: 1px solid #eeeeee30;
      }
      td,
      th {
         font-size: 0.9rem;
         color: ${globalTheme.colors.darkMode.light};
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
export const Row = styled.div`
   display: flex;
   align-items: center;
`;

export const ChartContainer = styled.div`
   background: rgb(9, 33, 60);
   background: linear-gradient(
      180deg,
      rgba(9, 33, 60, 0) 0%,
      rgba(3, 43, 66, 1) 100%
   );

   height: 300px;
   width: 66%;
`;

export const CardsContainer = styled.div`
   height: 50%;
   display: flex;
   flex-direction: column;
   padding-left: 5rem;
`;
export const TablesContainer = styled.div`
   width: 33%;
   height: 100%;
`;
export const Mock = styled.div`
   width: 150px;
   height: 150px;
   border-radius: 50%;
   background-color: ${globalTheme.colors.darkMode.light}+ "30";
   margin: 2rem auto;
`;
