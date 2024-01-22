import React, { Component } from "react";
import CandleStickCharts from "../chart/CandleStickCharts";
import niftyDataSummary from "./../../json_data/nifty_data_summary.json";

class Industries extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.industries);

    const allIndustriesData = {};
    const industries = Object.keys(this.props.industries);
    const niftyCandleData = niftyDataSummary["nifty_candle_data"];

    industries.forEach((eachIndustry) => {
      const eachIndustryData = this.props.industries[eachIndustry];
      const eachIndustryObject = {};
      eachIndustryData.forEach((eachStock) => {
        eachIndustryObject[eachStock] = niftyCandleData[eachStock];
      });

      allIndustriesData[eachIndustry] = eachIndustryObject;
    });

    this.state = {
      industries: ["All Industries", ...Object.keys(this.props.industries)],
      selectedIndustry: Object.keys(this.props.industries)[0],
      allIndustriesData: allIndustriesData,
    };
  }

  setSelectedIndustry = (e) => {
    this.setState({ selectedIndustry: e.target.value });
  };

  render() {
    console.log(this.state);
    let industryData = null;
    if (this.state.allIndustriesData != null) {
      if (this.state.selectedIndustry === "All Industries") {
        industryData = {};
        this.state.industries
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

    console.log("industryData: ", industryData);

    return (
      <div>
        {dropDown}
        {industryData != null ? (
          <CandleStickCharts data={industryData} sort={true} />
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
