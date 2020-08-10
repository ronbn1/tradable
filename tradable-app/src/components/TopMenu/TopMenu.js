import React from "react";
import { NavBar } from "rb-ui";
import styled from "styled-components";
import icon from "../../assets/tachometer-alt-solid.svg";
const TopMenu = () => {
   return (
      <Container>
         <NavBar
            titleStyle={{ color: "white", fontSize: "1rem", marginTop: "1px" }}
            title="CONST & GOVERNANCE"
            icon={[icon, icon, icon]}
         />
         ;
      </Container>
   );
};

const Container = styled.div`
   width: calc(100vw - 8rem);
`;
export default TopMenu;
