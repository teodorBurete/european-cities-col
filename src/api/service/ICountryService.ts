import { ICountry } from "./model/country/ICountry";

export interface ICountryService {
  getCountries(): Promise<ICountry[]>;
}
