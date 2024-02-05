import React, { Component } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AllStocks from "./AllStocks";
import TopPerformers from "./toppers/TopPerformers";
import PricesRange from "./price/PricesRange";
import TrendsList from "./trend/TrendsList";

class MarketData extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Stocks By Price</Tab>
          <Tab>Toppers</Tab>
          <Tab>Trends</Tab>
          <Tab>All Stocks</Tab>
        </TabList>
        <TabPanel>
          <PricesRange market={this.props.market} />
        </TabPanel>
        <TabPanel>
          <TopPerformers market={this.props.market} />
        </TabPanel>
        <TabPanel>
          <TrendsList market={this.props.market} />
        </TabPanel>
        <TabPanel>
          <AllStocks market={this.props.market} />
        </TabPanel>
      </Tabs>
    );
  }
}

export default MarketData;
