import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MFTabs from "./mf/MFTabs";
import NiftyTabs from "./nifty/NiftyTabs";
import AllMarket from "./all_market/AllMarket";
import BuildInfo from "./BuildInfo";
import CryptoTabs from "./crypto/CryptoTabs";

const TabsList = () => (
  <Tabs>
    <TabList>
      <Tab>
        <nobr>Mutual Funds</nobr>
      </Tab>
      <Tab>
        <nobr>NIFTY</nobr>
      </Tab>
      <Tab>
        <nobr>Markets</nobr>
      </Tab>
      <Tab>
        <nobr>Crypto</nobr>
      </Tab>
      <Tab>
        <nobr>Build Info</nobr>
      </Tab>
    </TabList>
    <TabPanel>
      <MFTabs />
    </TabPanel>
    <TabPanel>
      <NiftyTabs />
    </TabPanel>
    <TabPanel>
      <AllMarket />
    </TabPanel>
    <TabPanel>
      <CryptoTabs />
    </TabPanel>
    <TabPanel>
      <BuildInfo />
    </TabPanel>
  </Tabs>
);

export default TabsList;
