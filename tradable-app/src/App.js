import React from "react";
import styled from "styled-components";
import SideMenu from "./components/SideNav/SideNav";
import TopMenu from "./components/TopMenu/TopMenu";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
   return (
      <Container>
         <SideMenu />
         <div className="main">
            <TopMenu />
            <Dashboard />
         </div>
      </Container>
   );
}
const Container = styled.div`
   display: flex;
   height: 100vh;
   background: rgb(3, 49, 69);
   background: radial-gradient(
      circle,
      rgba(3, 49, 69, 1) 0%,
      rgba(6, 24, 57, 1) 100%
   );
   .main {
      display: flex;
      flex-direction: column;
   }
`;
export default App;
