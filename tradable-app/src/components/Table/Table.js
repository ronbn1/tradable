import React from "react";
import { Container } from "./style";
const Table = ({ mode }) => {
   return (
      <Container mode={mode}>
         <table>
            <tr>
               <th>Services</th>
               <th>Savings</th>
               <th>Amount</th>
            </tr>
            <tr>
               <td>EC2</td>
               <td>45%</td>
               <td>$45,000</td>
            </tr>
            <tr>
               <td>EC2</td>
               <td>45%</td>
               <td>$45,000</td>
            </tr>
            <tr>
               <td>EC2</td>
               <td>45%</td>
               <td>$45,000</td>
            </tr>
         </table>
      </Container>
   );
};

export default Table;
