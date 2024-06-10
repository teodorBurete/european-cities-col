import { axiosClient } from "../Api";
import { ICity } from "./model/city/ICity";

export interface ICityService {
  getCityById(cityId: string | undefined): Promise<{ data: ICity | null }>;
  getCities(): Promise<{ data: ICity[] }>;
  searchCityByName(query: string): Promise<{ data: ICity[] }>;
}

export default class CityServiceImpl implements ICityService {
  async searchCityByName(query: string): Promise<{ data: ICity[] }> {
    try {
      const response = await axiosClient.get(`/cities/search?query=${query}`);
      if (response && response.data) {
        return response as { data: ICity[] };
      } else {
        return { data: [] as ICity[] };
      }
    } catch (error) {
      console.error(
        `Error fetching cities that contain the string ${query}: `,
        error
      );
      return { data: [] as ICity[] };
    }
  }

  async getCityById(cityId: string): Promise<{ data: ICity | null }> {
    try {
      const response = await axiosClient.get(`/cities/${cityId}`);
      if (response && response.data && Object.keys(response.data).length > 0) {
        return response;
      } else {
        return { data: null };
      }
    } catch (error) {
      console.error(`Error fetching city with id ${cityId}: `, error);
      return { data: null };
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
