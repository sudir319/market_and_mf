import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TopPerformersByPeriod from "./TopPerformersByPeriod";

function TopPerformers({ market }) {
  return (
    <Tabs>
      <TabList>
        <Tab>1 Week</Tab>
        <Tab>2 Weeks</Tab>
        <Tab>1 Month</Tab>
        <Tab>2 Months</Tab>
        <Tab>3 Months</Tab>
        <Tab>6 Months</Tab>
        <Tab>9 Months</Tab>
        <Tab>1 Year</Tab>
      </TabList>
      <TabPanel>
        <TopPerformersByPeriod market={market} duration="1W" stockCount="100" />
      </TabPanel>
      <TabPanel>
        <TopPerformersByPeriod market={market} duration="2W" stockCount="100" />
      </TabPanel>
      <TabPanel>
        <TopPerformersByPeriod market={market} duration="1M" stockCount="150" />
      </TabPanel>
      <TabPanel>
        <TopPerformersByPeriod market={market} duration="2M" stockCount="150" />
      </TabPanel>
      <TabPanel>
        <TopPerformersByPeriod market={market} duration="3M" stockCount="200" />
      </TabPanel>
      <TabPanel>
        <TopPerformersByPeriod market={market} duration="6M" stockCount="200" />
      </TabPanel>
      <TabPanel>
        <TopPerformersByPeriod market={market} duration="9M" stockCount="250" />
      </TabPanel>
      <TabPanel>
        <TopPerformersByPeriod market={market} duration="1Y" stockCount="300" />
      </TabPanel>
    </Tabs>
  );
}

export default TopPerformers;
