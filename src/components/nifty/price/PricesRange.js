import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StocksByPrice from "./StocksByPrice";
import niftyDataSummary from "../../../json_data/nifty_data_summary.json";

function PricesRange() {
  const stocksByPricesRange = niftyDataSummary["stocks_by_price_range"];
  const pricesRange = Object.keys(stocksByPricesRange).sort();

  return (
    <div>
      <Tabs>
        <TabList>
          {pricesRange.map((priceRange) => (
            <Tab key={priceRange}>{priceRange}</Tab>
          ))}
        </TabList>
        {pricesRange.map((priceRange) => (
          <TabPanel key={priceRange}>
            <StocksByPrice
              priceRange={priceRange}
              data={stocksByPricesRange[priceRange]}
            />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default PricesRange;
