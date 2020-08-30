import React, { useState, useEffect } from "react";

import { getCountryImgCode } from "../../../utils/helper/functions";
import { numberSuffix } from "../../../utils/pipes/number-suffix.pipe";

interface ICountry {
  countryRegion: string;
  confirmed: number;
  active: number;
  deaths: number;
  recovered: number | null;
}

export const CountryCard = ({
  countryRegion,
  confirmed,
  active,
  deaths,
  recovered,
}: ICountry) => {
  const [list, setList] = useState<string | undefined>(undefined);

  useEffect(() => {
    const countryCode = getCountryImgCode(countryRegion);
    const imageURL = `http://www.geonames.org/flags/x/${countryCode.toLowerCase()}.gif`;
    setList(imageURL);
  }, [countryRegion]);

  return (
    <div className="card">
      <div className="card-image">
        <img className="country-symbol" src={list} alt={countryRegion} />
      </div>
      <div className="card-middle">
        <div className="card-name">{countryRegion}</div>
        <div className="card-description">
          <dd>{numberSuffix(confirmed)}</dd>Cases
        </div>
      </div>
      <div className="card-stats">
        <div className="one-third">
          <div className="stat">{numberSuffix(active)}</div>
          <div className="stat-value">Active</div>
        </div>
        <div className="one-third">
          <div className="stat">{numberSuffix(deaths)}</div>
          <div className="stat-value">Deaths</div>
        </div>
        <div className="one-third">
          <div className="stat">{numberSuffix(recovered)}</div>
          <div className="stat-value">Recovered</div>
        </div>
      </div>
    </div>
  );
};

CountryCard.whyDidYouRender = true;
