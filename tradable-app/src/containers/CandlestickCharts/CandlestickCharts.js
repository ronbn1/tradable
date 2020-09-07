import React, { useState, useContext, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Context from "../../store/Context";

const ApexChart = () => {
   const { candlesData } = useContext(Context);
   const [data, setData] = useState([]);

   const [state, setState] = useState({
      options: {
         chart: {
            type: "candlestick",
            height: 350,
         },
         title: {
            text: "CandleStick Chart",
            align: "left",
            style: {
               fontWeight: 600,
               color: "#eeeeeea0",
               fontSize: "18px",
            },
         },
         xaxis: {
            type: "datetime",
            labels: {
               style: {
                  fontWeight: 600,
                  colors: "#eeeeeea0",
               },
            },
         },
         yaxis: {
            tooltip: {
               enabled: true,
            },
            labels: {
               style: {
                  fontWeight: 600,
                  colors: "#eeeeeea0",
               },
            },
         },
      },
   });

   const axisData = [];
   useEffect(() => {
      if (candlesData["BINANCE:BTCUSDT"]) {
         for (let i = 0; i < candlesData["BINANCE:BTCUSDT"].length; i++) {
            let c = candlesData["BINANCE:BTCUSDT"][i];

            if (
               !axisData.length ||
               c.time !== axisData[axisData.length - 1].x
            ) {
               axisData.push({
                  x: c.time,
                  y: [c.open, c.high, c.low, c.close],
               });
            }
         }
         setData([{ data: [...axisData] }]);
         const stateWithCorrectChartName = JSON.parse(JSON.stringify(state));
         stateWithCorrectChartName.options.title.text = `${candlesData["BINANCE:BTCUSDT"][0].symbol} CandleStick Chart`;
         setState(stateWithCorrectChartName);
      }
   }, [candlesData]);

   return (
      <ReactApexChart
         options={state.options}
         series={data}
         type="candlestick"
         height={250}
         style={{ padding: "2rem" }}
      />
   );
};

export default ApexChart;
