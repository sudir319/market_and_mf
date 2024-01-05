
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectorTabs from './sector/SectorTabs';

const NiftyTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Nifty50</Tab>
      <Tab>Nifty Stocks</Tab>
      <Tab>By Sector</Tab>
    </TabList>

    <TabPanel>
        Nifty Tabs
    </TabPanel>
    <TabPanel>
        All Stocks
    </TabPanel>
    <TabPanel>
        <SectorTabs/>
    </TabPanel>
  </Tabs>
);

export default NiftyTabs;