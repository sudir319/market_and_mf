import React, { Component } from "react";
import CandleStickCharts from "../chart/CandleStickCharts";
import niftyDataSummary from "./../../json_data/nifty_data_summary.json";

export class IndexData extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }
  render() {
    const niftyCandleData = niftyDataSummary["nifty_candle_data"];
    let stocks = this.props.stocks;

    console.log(stocks);

    let data = {};
    stocks.forEach((eachStock) => {
      data[eachStock] = niftyCandleData[eachStock];
    });

    console.log(data);

    return (
      <div>
        <CandleStickCharts data={data} sort={true} />
      </div>
    );
  }
}

export default IndexData;
