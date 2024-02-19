import React from "react";
import marketDataSummary from "../json_data/market_data_summary.json";

export default function VersionInfo() {
  const candle_data = marketDataSummary["NSE"]["candle_data"];
  const stockdata =
    candle_data[Object.keys(marketDataSummary["NSE"]["candle_data"])[0]];
  const lastCandle = stockdata[stockdata.length - 1];
  const lastCandleDate = lastCandle["date"];
  const currentDate = new Date(Date.parse(lastCandleDate));
  const year = currentDate.getFullYear();
  const month =
    currentDate.getMonth() < 9
      ? "0" + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1;
  const day =
    currentDate.getDate() < 10
      ? "0" + currentDate.getDate()
      : currentDate.getDate();
  const version = `${year}.${month}.${day}`;
  return <div align="center">This is build on {version}</div>;
}
