import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MFTabs from "./mf/MFTabs";
import NiftyTabs from "./nifty/NiftyTabs";
import AllMarket from "./all_market/AllMarket";

const TabsList = () => (
  <Tabs>
    <TabList>
      <Tab>
        <nobr>NIFTY</nobr>
      </Tab>
      <Tab>
        <nobr>Mutual Funds</nobr>
      </Tab>
      <Tab>
        <nobr>Markets</nobr>
      </Tab>
    </TabList>
    <TabPanel>
      <NiftyTabs />
    </TabPanel>
    <TabPanel>
      <MFTabs />
    </TabPanel>
    <TabPanel>
      <AllMarket />
    </TabPanel>
  </Tabs>
);

export default TabsList;
