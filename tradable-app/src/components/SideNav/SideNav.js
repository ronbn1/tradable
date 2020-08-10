import React from "react";
import { SideNav, Item } from "rb-ui";
import dashboard from "../../assets/tachometer-alt-solid.svg";
const SideMenu = () => {
   return (
      <SideNav logo="TR">
         <Item label="Dashboard" svg={dashboard} active />
         <Item label="Dashboard" svg={dashboard} />
         <Item label="Dashboard" svg={dashboard} />
         <Item label="Dashboard" svg={dashboard} />
         <Item label="Dashboard" svg={dashboard} />
      </SideNav>
   );
};

export default SideMenu;
