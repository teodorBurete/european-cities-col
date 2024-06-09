import { ICity } from "../city/ICity";
import { ICountryEconomicIndicators } from "./ICountryEconomicIndicators";

export interface ICountry {
  id: number;
  impact_country: string;
  population: number;
  capital: string;
  area: number;
  currency_code: string;
  currency_name: string;
  phone: number;
  iso_a2: string;
  cities: ICity[];
  economic_indicators: ICountryEconomicIndicators;
}
