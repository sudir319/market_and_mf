import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TopPerformersByPeriod from "./TopPerformersByPeriod";

function TopPerformers() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>1 Week</Tab>
          <Tab>2 Weeks</Tab>
          <Tab>1 Month</Tab>
          <Tab>2 Months</Tab>
          <Tab>3 Months</Tab>
          <Tab>6 Months</Tab>
          <Tab>1 Year</Tab>
        </TabList>
        <TabPanel>
          <TopPerformersByPeriod duration="1W" stockCount="10" />
        </TabPanel>
        <TabPanel>
          <TopPerformersByPeriod duration="2W" stockCount="25" />
        </TabPanel>
        <TabPanel>
          <TopPerformersByPeriod duration="1M" stockCount="20" />
        </TabPanel>
        <TabPanel>
          <TopPerformersByPeriod duration="2M" stockCount="25" />
        </TabPanel>
        <TabPanel>
          <TopPerformersByPeriod duration="3M" stockCount="30" />
        </TabPanel>
        <TabPanel>
          <TopPerformersByPeriod duration="6M" stockCount="50" />
        </TabPanel>
        <TabPanel>
          <TopPerformersByPeriod duration="9M" stockCount="75" />
        </TabPanel>
        <TabPanel>
          <TopPerformersByPeriod duration="1Y" stockCount="100" />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TopPerformers;
