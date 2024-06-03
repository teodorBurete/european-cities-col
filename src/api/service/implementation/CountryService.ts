import { ICountry } from "../model/country/ICountry";
import { axiosClient } from "../../Api";

export interface ICountryService {
  getCountryByCode(
    countryCode: string | undefined
  ): Promise<{ data: ICountry }>;
  getCountries(): Promise<{ data: ICountry[] }>;
}

//clasa care implementeaza service-ul si defineste functile
export default class CountryServiceImpl implements ICountryService {
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

  async getCountryByCode(countryCode: string): Promise<{ data: ICountry }> {
    try {
      const response = await axiosClient.get(`/countries/${countryCode}`);
      if (response && response.data) {
        return response;
      } else {
        return { data: {} as ICountry };
      }
    } catch (error) {
      console.error(`Error fetching country with code ${countryCode}: `, error);
      return { data: {} as ICountry };
    }
  }
}
