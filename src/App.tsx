import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { MainApp } from "./style.js";

const App: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([] as string[][]);
  console.log(data);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json"
    )
      .then((response) => {
        if (response) {
          setIsLoading(false);
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch(console.log);
  }, []);

  console.log(
    Highcharts.color(Highcharts.getOptions().colors[0])
      .setOpacity(0)
      .get("rgba")
  );

  const options = {
    title: {
      text: "AAPL stock price by minute",
    },
    subtitle: {
      text: "Using explicit breaks for nights and weekends",
    },
    xAxis: {
      breaks: [
        {
          // Nights
          from: Date.UTC(2011, 9, 6, 16),
          to: Date.UTC(2011, 9, 7, 8),
          repeat: 24 * 36e5,
        },
        {
          // Weekends
          from: Date.UTC(2011, 9, 7, 16),
          to: Date.UTC(2011, 9, 10, 8),
          repeat: 7 * 24 * 36e5,
        },
      ],
    },
    series: [
      {
        name: "AAPL",
        type: "area",
        data: data,
        gapSize: 5,
        tooltip: {
          valueDecimals: 2,
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "rgba(174,231,255,0.8)"],
            [1, "rgba(124,181,236,0.1)"],
          ],
        },
        threshold: null,
      },
    ],
  };

  return (
    <MainApp>
      <div className="App">
        <header className="AppHeader">Data visualisation tool</header>
        {isLoading
          ? "loading..."
          : `We have retrieved ${data.length} rows of data`}
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </MainApp>
  );
};

export default App;
