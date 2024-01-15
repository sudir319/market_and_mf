import React, { Component } from "react";
import CandleStickCharts from "../../chart/CandleStickCharts";

class TopPerformersByPeriod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: this.props.duration,
      stockCount: this.props.stockCount,
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:8080/data/topStocks/" +
        this.state.duration +
        "/" +
        this.state.stockCount
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(Object.keys(response));
        this.setState({ data: response });
      });
  }

  render() {
    return (
      <div>
        {this.state.data != null ? (
          <CandleStickCharts data={this.state.data} sort={false} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default TopPerformersByPeriod;
