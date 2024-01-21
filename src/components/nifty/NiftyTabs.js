import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import React, { Component } from "react";
import IndexTabs from "./IndexTabs";
import TopPerformers from "./toppers/TopPerformers";
import PricesRange from "./price/PricesRange";
import TrendsList from "./trend/TrendsList";

import niftyDataSummary from "./../../json_data/nifty_data_summary.json";

export class NiftyTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indices: niftyDataSummary["stocks_by_group"],
    };
  }

  render() {
    console.log(this.state);

    let content = <div>Loading....</div>;

    if (this.state.indices) {
      let groups = Object.keys(this.state.indices);
      console.log(groups);
      // Reorder the tabs for requirement..
      try {
        groups.splice(groups.indexOf("Sector"), 1);
        groups.splice(groups.indexOf("Industry"), 1);
        groups.push("Sector");
        groups.push("Industry");
      } catch (err) {
        groups = Object.keys(this.state.indices);
      }

      return (
        <Tabs>
          <TabList>
            {groups.map((tab) => (
              <Tab key={tab}>{tab}</Tab>
            ))}
            <Tab key="topper">Toppers</Tab>
            <Tab key="price">
              <nobr>Stocks By Price</nobr>
            </Tab>
            <Tab key="trend">Trends</Tab>
          </TabList>
          {groups.map((tab) => (
            <TabPanel key={tab}>
              <IndexTabs index={tab} indices={this.state.indices[tab]} />
            </TabPanel>
          ))}
          <TabPanel key="topper">
            <TopPerformers />
          </TabPanel>
          <TabPanel key="price">
            <PricesRange />
          </TabPanel>
          <TabPanel key="trend">
            <TrendsList />
          </TabPanel>
        </Tabs>
      );
    }

    return content;
  }
}

export default NiftyTabs;
