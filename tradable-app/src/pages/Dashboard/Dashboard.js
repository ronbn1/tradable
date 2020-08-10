import React from "react";
import { Title } from "rb-ui";
import { Card } from "rb-ui";
import styled from "styled-components";
const Dashboard = () => {
   return (
      <Container>
         <div className="titleRow">
            <Title color="light" text="Dashboard" />;
            <Card borderColor="#ffffff40">
               <Card.Body style={{ padding: "0" }}>
                  <Card.Text
                     style={{
                        color: "#eeeeeea0",
                        fontSize: "0.8rem",
                        padding: "10px",
                     }}
                  >
                     Player Account
                  </Card.Text>
                  <Card.Text
                     style={{
                        fontSize: "0.9rem",
                        color: "#F66643",
                        padding: "0 10px 5px 10px",
                     }}
                  >
                     Account Name
                  </Card.Text>
               </Card.Body>
            </Card>
         </div>
      </Container>
   );
};
const Container = styled.div`
   padding: 1rem 4rem;
   .titleRow {
      display: flex;
      justify-content: space-between;
   }
`;

export default Dashboard;
