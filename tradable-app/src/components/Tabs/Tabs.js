import React, { useContext } from "react";
import { Container, Item, IconContainer, LinksContainer } from "./style";
import { Icon, Colors } from "rb-ui";
import dots from "../../assets/ellipsis-v-solid.svg";
import Context from "../../store/Context";
import { globalTheme } from "../../themes/globalStyls";

const Tabs = () => {
   const { getMode, darkMode } = useContext(Context);

   return (
      <Container mode={darkMode}>
         <LinksContainer>
            <Item mode={darkMode} active>
               Overview
            </Item>
            <Item mode={darkMode}>Spending Trends</Item>
         </LinksContainer>
         <IconContainer>
            <Icon svg={dots} color={Colors.LIGHT} />
         </IconContainer>
      </Container>
   );
};

export default Tabs;
