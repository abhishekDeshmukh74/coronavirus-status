import React, { useCallback, useEffect, useState, Fragment } from "react";
import cogoToast from "cogo-toast";

import { CountryCard } from "./country-card/country";
import { AllData } from "./dashboard.interfaces";
import { getAllData } from "./dashboard.service";

export const Dashboard = () => {
  const [data, setData] = useState<AllData | null>(null);

  const fetchData = useCallback(async () => {
    setData(await getAllData());
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!data) {
    cogoToast.loading("Fetching data...", {
      hideAfter: 1,
    });
    return <Fragment />;
  }

  return (
    <div className="card-list">
      {data.features.map((item, index) => {
        return (
          <CountryCard
            key={index}
            countryRegion={item.attributes.Country_Region}
            confirmed={item.attributes.Confirmed}
            active={item.attributes.Active}
            deaths={item.attributes.Deaths}
            recovered={item.attributes.Recovered}
          />
        );
      })}
    </div>
  );
};

Dashboard.whyDidYouRender = true;
