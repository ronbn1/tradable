import React, { useContext } from "react";
import Context from "../../store/Context";
import { SideNav, Item } from "rb-ui";
import dashboard from "../../assets/tachometer-alt-solid.svg";
import { globalTheme } from "../../themes/globalStyls";
const SideMenu = ({ mode }) => {
   const { darkMode, getMode } = useContext(Context);

   const bgOne = darkMode
      ? globalTheme.colors[getMode()].backgroundOne
      : globalTheme.colors.lightMode.secondary + "a0";
   const bgTwo = darkMode
      ? globalTheme.colors.darkMode.backgroundTwo
      : globalTheme.colors.lightMode.secondary + 50;
   return (
      <SideNav
         logoColor={
            darkMode
               ? globalTheme.colors.darkMode.primary
               : globalTheme.colors.lightMode.text
         }
         bgOne={bgOne}
         bgTwo={bgTwo}
         style={{ height: "auto" }}
         logo="TR"
      >
         <Item
            textColor={globalTheme.colors[getMode()].text}
            iconColor={globalTheme.colors[getMode()].primary + "aa"}
            activeColorOne={globalTheme.colors[getMode()].selected}
            activeColorTwo={globalTheme.colors[getMode()].primary + "a0"}
            label="Dashboard"
            svg={dashboard}
            active
         />
         <Item
            textColor={globalTheme.colors[getMode()].text}
            iconColor={globalTheme.colors[getMode()].primary + "aa"}
            label="Dashboard"
            svg={dashboard}
         />
         <Item
            textColor={globalTheme.colors[getMode()].text}
            iconColor={globalTheme.colors[getMode()].primary + "aa"}
            label="Dashboard"
            svg={dashboard}
         />
         <Item
            textColor={globalTheme.colors[getMode()].text}
            iconColor={globalTheme.colors[getMode()].primary + "aa"}
            label="Dashboard"
            svg={dashboard}
         />
         <Item
            textColor={globalTheme.colors[getMode()].text}
            iconColor={globalTheme.colors[getMode()].primary + "aa"}
            label="Dashboard"
            svg={dashboard}
         />
      </SideNav>
   );
};

export default SideMenu;
