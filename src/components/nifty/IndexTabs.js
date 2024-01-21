import React, { Component } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import IndexData from "./IndexData";
import Industries from "./Industries";
import niftyDataSummary from "./../../json_data/nifty_data_summary.json";

export class IndexTabs extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      index: this.props.index,
      indices: niftyDataSummary["stocks_by_group"],
    };
  }
  render() {
    console.log(this.state.indices);

    if (this.state.index === "Industry") {
      return <Industries industries={this.state.indices[this.state.index]} />;
    } else {
      return (
        <Tabs>
          <TabList>
            {Object.keys(this.state.indices[this.state.index]).map((tab) => (
              <Tab key={tab}>{tab.substring(6)}</Tab>
            ))}
          </TabList>
          {Object.keys(this.state.indices[this.state.index]).map((tab) => (
            <TabPanel key={tab}>
              <IndexData
                index={tab}
                stocks={this.state.indices[this.state.index][tab]}
              />
            </TabPanel>
          ))}
        </Tabs>
      );
    }
  }
}

export default IndexTabs;
