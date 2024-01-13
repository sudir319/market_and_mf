import React, { Component } from "react";
import CandleStickCharts from "../chart/CandleStickCharts";

export class IndexData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index,
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:8080/data/indicesDataSummaryByIndex/" + this.state.index
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response });
      });
  }

  render() {
    return (
      <div>
        {this.state.data != null ? (
          <CandleStickCharts data={this.state.data} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default IndexData;
