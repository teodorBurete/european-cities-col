import axios from "axios";
import { ICountryService } from "../ICountryService";
import { ICountry } from "../model/country/ICountry";
import { axiosClient } from "../../Api";

//clasa care implementeaza service-ul si defineste functile
export default class CountryServiceImpl implements ICountryService {
  async getCountries(): Promise<ICountry[]> {
    return axiosClient.get("/countries");
  }
}
