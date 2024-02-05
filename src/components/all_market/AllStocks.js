import React, { Component } from "react";
import marketDataSummary from "../../json_data/market_data_summary.json";
import CandleStickCharts from "../chart/CandleStickCharts";

class AllStocks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = marketDataSummary[this.props.market]["candle_data"];
    console.log(Object.keys(data).length);
    return <CandleStickCharts data={data} sort={true} />;
  }
}

export default AllStocks;
