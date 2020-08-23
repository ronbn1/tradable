import React, { useContext } from "react";
import Context from "../../store/Context";
import { Title, Card, Colors, Sizes } from "rb-ui";
import {
   Container,
   Row,
   ChartContainer,
   CardsContainer,
   TablesContainer,
   Mock,
} from "./style";
import Tabs from "../../components/Tabs/Tabs";
import increase from "../../assets/increase-arrow.svg";
import decrease from "../../assets/decrease-arrow.svg";
import dots from "../../assets/ellipsis-v-solid.svg";
import Table from "../../components/Table/Table";
import { globalTheme } from "../../themes/globalStyls";
import CandlestickCharts from "../../containers/CandlestickCharts/CandlestickCharts";
import TitleRow from "../../components/TitleRow/TitleRow";
const Dashboard = () => {
   const { darkMode, getMode, setDarkMode } = useContext(Context);
   return (
      <Container>
         <TitleRow />
         <Tabs />
         <button onClick={() => setDarkMode((cur) => !cur)} />
         <Row>
            <ChartContainer>
               <CandlestickCharts />
            </ChartContainer>
            <CardsContainer>
               {[1, 2].map((i) => (
                  <Row>
                     {[1, 2].map((item) => (
                        <Card
                           borderColor={
                              darkMode
                                 ? globalTheme.colors.darkMode.light + 50
                                 : globalTheme.colors.lightMode.dark + 50
                           }
                           width={Sizes.XS}
                           style={{ margin: "1rem" }}
                        >
                           <Card.Body>
                              <Card.TopIcon
                                 svg={increase}
                                 color={Colors.SUCCESS}
                              />
                              <Card.Title
                                 style={{
                                    color: `${
                                       globalTheme.colors[getMode()].text
                                    }a0`,
                                 }}
                                 size="m"
                              >
                                 $1,553
                              </Card.Title>
                              <Card.Subtitle
                                 color="light"
                                 style={{
                                    fontSize: "0.8rem",
                                    color: `${
                                       globalTheme.colors[getMode()].text
                                    }a0`,
                                 }}
                              >
                                 Average Daily Cost
                              </Card.Subtitle>
                           </Card.Body>
                        </Card>
                     ))}
                  </Row>
               ))}
            </CardsContainer>
         </Row>
         <Row>
            {[1, 2].map((i) => (
               <Card
                  borderColor="transparent"
                  style={{
                     margin: "1rem",
                     width: "30%",
                     height: "30rem",
                     backgroundColor:
                        globalTheme.colors.darkMode.cardBackground,
                     borderRadius: "20px",
                  }}
               >
                  <Card.Body>
                     <Card.TopIcon svg={dots} color={Colors.LIGHT} />
                     <Card.Title color="light" size="m">
                        Potential Savings
                     </Card.Title>
                     <Mock />
                     <Card.LinksContainer style={{ flexWrap: "wrap" }}>
                        {[1, 2, 3, 4].map((i) => (
                           <Card
                              borderColor={
                                 globalTheme.colors.darkMode.light + "30"
                              }
                              style={{ margin: "0.5rem" }}
                           >
                              <Card.Body>
                                 <Card.Title color="light" size="m">
                                    $1,553
                                 </Card.Title>
                                 <Card.Subtitle
                                    color="secondary"
                                    style={{ fontSize: "0.8rem" }}
                                 >
                                    Average Daily Cost
                                 </Card.Subtitle>
                              </Card.Body>
                           </Card>
                        ))}
                     </Card.LinksContainer>
                  </Card.Body>
               </Card>
            ))}

            <TablesContainer>
               {[1, 2].map((i) => (
                  <Card
                     borderColor="transparent"
                     style={{
                        margin: "1rem",
                        width: "100%",
                        backgroundColor:
                           globalTheme.colors.darkMode.cardBackground,
                        borderRadius: "20px",
                     }}
                  >
                     <Card.Body>
                        <Card.Title
                           style={{
                              color: globalTheme.colors.darkMode.light + "a0",
                           }}
                           color="light"
                           size="s"
                        >
                           Top Services
                        </Card.Title>
                        <Table mode={getMode()} />
                     </Card.Body>
                  </Card>
               ))}
            </TablesContainer>
         </Row>
      </Container>
   );
};

export default Dashboard;
