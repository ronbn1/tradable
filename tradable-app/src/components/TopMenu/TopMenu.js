import React, { useContext } from "react";
import { NavBar } from "rb-ui";
import styled from "styled-components";
import icon from "../../assets/tachometer-alt-solid.svg";
import Context from "../../store/Context";
import { globalTheme } from "../../themes/globalStyls";
const TopMenu = () => {
   const { getMode, darkMode } = useContext(Context);
   const color = darkMode ? "light" : "dark";
   return (
      <Container>
         <NavBar
            titleStyle={{
               color: globalTheme.colors[getMode()][color],
               fontSize: "1rem",
               marginTop: "1px",
            }}
            title="CONST & GOVERNANCE"
            icon={[icon, icon, icon]}
            borderColor={globalTheme.colors[getMode()][color]}
         />
         ;
      </Container>
   );
};

const Container = styled.div`
   width: calc(100vw - 8rem);
`;
export default TopMenu;
