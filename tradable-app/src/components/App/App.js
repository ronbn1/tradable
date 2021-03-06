import React, { useContext, useEffect } from "react";
import Context from "../../store/Context";
import SideMenu from "../SideNav/SideNav";
import TopMenu from "../TopMenu/TopMenu";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { Container, Main } from "./style";
import { socketConnection } from "../../services/sockets";
import axios from "axios";
function App() {
   const { darkMode, getMode, setCandles, candlesData } = useContext(Context);

   useEffect(() => {
      socketConnection(setCandles);
   }, []);

   return (
      <Container mode={getMode()}>
         <SideMenu />
         <Main mode={getMode()}>
            <TopMenu mode={getMode()} />
            <Dashboard />
         </Main>
      </Container>
   );
}

export default App;
