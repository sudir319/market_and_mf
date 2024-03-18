import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";
import cryptoDataSummary from "../../../json_data/crypto_data_summary.json";

class TrendData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: cryptoDataSummary["crypto_candle_data"],
      trend: this.props.trend,
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      selectedDay: 3,
    };
  }

  setSelecteddays = (e) => {
    this.setState({ selectedDay: e.target.value });
  };

  filterData = (candleData) => {
    let newCandleData = {};
    Object.keys(candleData).forEach((symbol) => {
      let lastCandles = candleData[symbol].slice(
        -1 * parseInt(this.state.selectedDay)
      );
      const candleCountFiltered = lastCandles.filter(
        (lastCandle) =>
          (this.state.trend === "Bullish" &&
            lastCandle.close > lastCandle.open) ||
          (this.state.trend === "Bearish" && lastCandle.close < lastCandle.open)
      ).length;

      if (candleCountFiltered === parseInt(this.state.selectedDay)) {
        newCandleData[symbol] = candleData[symbol];
      }
    });

    return newCandleData;
  };

  render() {
    let data = null;
    if (this.state.data != null) {
      data = this.filterData(this.state.data);
    }

    return (
      <div>
        <div align="center">
          No of days:
          <select
            defaultValue={this.state.selectedDay}
            onChange={(event) => this.setSelecteddays(event)}
          >
            {this.state.days.map((eachDay) => (
              <option key={eachDay}>{eachDay}</option>
            ))}
          </select>
        </div>
        {data != null ? (
          <CandleStickCharts data={data} sort={false} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default TrendData;
