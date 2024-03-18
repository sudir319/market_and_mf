import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import React, { Component } from "react";
import TopPerformers from "./toppers/TopPerformers";
import PricesRange from "./price/PricesRange";
import TrendsList from "./trend/TrendsList";

export class CryptoTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab key="price">
            <nobr>Stocks By Price</nobr>
          </Tab>
          <Tab key="topper">Toppers</Tab>
          <Tab key="trend">Trends</Tab>
        </TabList>
        <TabPanel key="price">
          <PricesRange />
        </TabPanel>
        <TabPanel key="topper">
          <TopPerformers />
        </TabPanel>
        <TabPanel key="trend">
          <TrendsList />
        </TabPanel>
      </Tabs>
    );
  }
}

export default CryptoTabs;
