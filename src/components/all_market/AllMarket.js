import React, { Component } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MarketData from "./MarketData";

class AllMarket extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>NSE</Tab>
          <Tab>BSE</Tab>
        </TabList>
        <TabPanel>
          <MarketData market="NSE" />
        </TabPanel>
        <TabPanel>
          <MarketData market="BSE" />
        </TabPanel>
      </Tabs>
    );
  }
}

export default AllMarket;
