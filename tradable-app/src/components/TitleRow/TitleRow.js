import React, { useContext } from "react";
import Context from "../../store/Context";
import { Title, Card } from "rb-ui";
import { globalTheme } from "../../themes/globalStyls";
import { Container } from "./style";

const TitleRow = () => {
   const { darkMode, getMode } = useContext(Context);
   return (
      <Container>
         <Title color={darkMode ? "light" : "dark"} text="Dashboard" />;
         <Card
            borderColor={
               darkMode
                  ? globalTheme.colors.darkMode.light + 30
                  : globalTheme.colors.lightMode.dark + 30
            }
         >
            <Card.Body style={{ padding: "0" }}>
               <Card.Text
                  style={{
                     color: `${globalTheme.colors[getMode()].text}a0`,
                     fontSize: "0.8rem",
                     padding: "10px",
                  }}
               >
                  Player Account
               </Card.Text>
               <Card.Text
                  style={{
                     fontSize: "0.9rem",
                     color: `${globalTheme.colors.darkMode.primary}`,
                     padding: "0 10px 5px 10px",
                  }}
               >
                  Account Name
               </Card.Text>
            </Card.Body>
         </Card>
      </Container>
   );
};

export default TitleRow;
