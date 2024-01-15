import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StocksByPrice from "./StocksByPrice";

function PricesRange() {
  const pricesRange = [
    "0-50",
    "50-100",
    "100-200",
    "200-500",
    "500-1000",
    "1000-10000",
    "10000-100000",
  ];
  return (
    <div>
      <Tabs>
        <TabList>
          {pricesRange.map((priceRange) => (
            <Tab>{priceRange}</Tab>
          ))}
        </TabList>
        {pricesRange.map((priceRange) => (
          <TabPanel>
            <StocksByPrice priceRange={priceRange} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default PricesRange;
