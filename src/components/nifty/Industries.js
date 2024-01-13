import React, { Component } from "react";
import CandleStickCharts from "../chart/CandleStickCharts";

class Industries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      industries: ["All Industries", ...this.props.industries],
      selectedIndustry: this.props.industries[0],
      allIndustriesData: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/data/dataSummaryForAllIndustries")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ ...this.state, allIndustriesData: response });
      });
  }

  setSelectedIndustry = (e) => {
    this.setState({ selectedIndustry: e.target.value });
  };

  render() {
    let industryData = null;
    if (this.state.allIndustriesData != null) {
      if (this.state.selectedIndustry === "All Industries") {
        industryData = {};
        this.props.industries
          .filter((eachIndustry) => eachIndustry !== "All Industries")
          .forEach((eachIndustry) => {
            let eachIndustryData = this.state.allIndustriesData[eachIndustry];
            industryData = { ...industryData, ...eachIndustryData };
          });
      } else if (this.state.selectedIndustry !== null) {
        industryData =
          this.state.allIndustriesData[this.state.selectedIndustry];
      }
    }

    let dropDown = (
      <div>
        Select Industry :
        <select
          defaultValue={this.state.selectedIndustry}
          onChange={(event) => this.setSelectedIndustry(event)}
        >
          {this.state.industries.map((eachIndustry) => (
            <option key={eachIndustry}>{eachIndustry}</option>
          ))}
        </select>
      </div>
    );

    return (
      <div>
        {dropDown}
        {industryData != null ? (
          <CandleStickCharts data={industryData} />
        ) : (
          <div>
            <br />
            Loading...
          </div>
        )}
      </div>
    );
  }
}

export default Industries;
