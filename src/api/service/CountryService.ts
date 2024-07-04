import { ICountry } from "./model/country/ICountry";
import { axiosClient } from "../Api";
import searchCountries from "../../constants/test-objects/searchCountries.json";

export interface ICountryService {
  getCountries(): Promise<{ data: ICountry[] }>;
  getCountriesById(
    countryId: string | undefined
  ): Promise<{ data: ICountry | null }>;
}

export default class CountryServiceImpl implements ICountryService {
  
  
  async getCountriesById(
    countryId: string | undefined
  ): Promise<{ data: ICountry | null }> {
    try {
      const response = await axiosClient.get(`/countries/${countryId}`);
      if (response && response.data) {
        return response;
      } else {
        return { data: null };
      }
    } catch (error) {
      console.error(`Error fetching country with ID ${countryId}: `, error);
      return { data: null };
    }
  }

  async getCountries(): Promise<{ data: ICountry[] }> {
    try {
      const response = await axiosClient.get("/countries");
      if (response && response.data) {
        return response;
      } else {
        return { data: [] as ICountry[] };
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
      return { data: [] as ICountry[] };
    }
  }

  async searchCountryByName(
    countryName: string
  ): Promise<{ data: ICountry[] }> {
    try {
      const response = searchCountries;
      if (response && response.data) {
        return response as { data: ICountry[] };
      } else {
        return { data: [] as ICountry[] };
      }
    } catch (error) {
      console.error(`Error fetching country with name ${countryName}: `, error);
      return { data: [] as ICountry[] };
    }
  }
}
