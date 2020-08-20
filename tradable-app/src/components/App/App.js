import React, { useContext, useEffect } from "react";
import Context from "../../store/Context";
import SideMenu from "../SideNav/SideNav";
import TopMenu from "../TopMenu/TopMenu";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { Container, Main } from "./style";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000/";

function App() {
   const { darkMode, getMode, setCandles } = useContext(Context);

   useEffect(() => {
      const socket = io(ENDPOINT);
      socket.on("dataReady", (data) => {
         setCandles(data);
      });
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
