export interface ICity {
  id: number;
  name: string;
  countryCode: string;
  population: number;
  area: number;
  annualPopulationChange: number;
  rankByPopulation?: number;
  gdp?: number;
  capital: boolean;
  latitude:number;
  longitude:number;
}
