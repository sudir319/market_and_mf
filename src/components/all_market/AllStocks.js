import React from "react";
import marketDataSummary from "../../json_data/market_data_summary.json";
import CandleStickCharts from "../chart/CandleStickCharts";

const AllStocks = ({market}) => {
  let data = marketDataSummary[market]["candle_data"];
  console.log(Object.keys(data).length);
  return <CandleStickCharts data={data} sort={true} />;
}

export default AllStocks;
