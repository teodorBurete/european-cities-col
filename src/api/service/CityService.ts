import { axiosClient } from "../Api";
import { ICity } from "./model/city/ICity";

export interface ICityService {
  getCityById(cityId: string | undefined): Promise<{ data: ICity }>;
  getCities(): Promise<{ data: ICity[] }>;
}

export default class CityServiceImpl implements ICityService {
  async getCityById(cityId: string): Promise<{ data: ICity }> {
    try {
      const response = await axiosClient.get(`/cities/${cityId}`);
      if (response && response.data) {
        return response;
      } else {
        return { data: {} as ICity };
      }
    } catch (error) {
      console.error(`Error fetching city with id ${cityId}: `, error);
      return { data: {} as ICity };
    }
  }

  async getCities(): Promise<{ data: ICity[] }> {
    try {
        const response = await axiosClient.get("/cities");
        if (response && response.data) {
          return response;
        } else {
          return { data: [] as ICity[] };
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
        return { data: [] as ICity[] };
      }
  }
}
