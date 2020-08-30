import axios from "axios";

import { API_URL } from "../../constants";
import { AllData } from "./dashboard.interfaces";

export async function getAllData(): Promise<AllData> {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    throw new Error(error.response?.data.message || error.message);
  }
}

export async function getImageURL(countryCode: string): Promise<AllData> {
  try {
    const { data } = await axios.get(
      `http://www.geonames.org/flags/x/${countryCode.toLowerCase()}.gif`
    );
    return data;
  } catch (error) {
    throw new Error(error.response?.data.message || error.message);
  }
}
