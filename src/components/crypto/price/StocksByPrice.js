import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";
import cryptoDataSummary from "../../../json_data/crypto_data_summary.json";

class StocksByPrice extends Component {
  constructor(props) {
    super(props);

    const stocksData = {};
    const cryptoCandleData = cryptoDataSummary["crypto_candle_data"];
    console.log(props);
    this.props.data.forEach(
      (eachSymbol) => (stocksData[eachSymbol] = cryptoCandleData[eachSymbol])
    );

    this.state = {
      priceRange: this.props.priceRange,
      data: stocksData,
    };
  }

  render() {
    return (
      <div>
        {this.state.data != null ? (
          <CandleStickCharts data={this.state.data} sort={true} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default StocksByPrice;
