import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Header from "./components/Header/";
import styled from "styled-components";
import stockData from "./constants/stockData.json";
import { getStockColour, stockParser } from "./utils";
import { iStockInfo, tickerType } from "./constants";

export const AppWrapper = styled.div`
  text-align: center;
  background-color: teal;
  height: 100vh;
`;

const tickers = Object.keys(stockData) as tickerType[];

const App: React.FC<{}> = () => {
  const [value, setValue] = useState<keyof iStockInfo>("open");
  const onChangeStockInfo = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.target.id as keyof iStockInfo);
  };

  const options = {
    chart: {
      zoomType: "x",
    },
    title: {
      text: "Stock prices change since 2010",
    },
    subtitle: {
      text: "Click on the stock tickers to visualise and compare each or all of them at once.",
    },
    tooltip: {
      backgroundColor: "rgba(169, 222, 183, 0.75)",
      borderColor: "rgb(95, 186, 119)",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: "datetime",
      labels: { format: "{value: %Y-%m-%d}" },
    },
    series: tickers.map((ticker) => ({
      name: ticker,
      type: "area",
      data: stockParser(stockData, ticker, value as keyof iStockInfo),
      gapSize: 5,
      tooltip: {
        valueDecimals: 2,
      },
      fillOpacity: 0.75,
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, `rgb(${getStockColour(ticker)})`],
          [1, `rgba(${getStockColour(ticker)}, 0.1)`],
        ],
      },
      lineWidth: 0.75,
      threshold: null,
    })),
  };

  return (
    <AppWrapper>
      <Header value={value} onChange={onChangeStockInfo} />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </AppWrapper>
  );
};

export default App;
