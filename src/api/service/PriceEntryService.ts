import { axiosClient } from "../Api";
import { CityPriceResponseDTO } from "./model/price-entry/CityPriceResponseDTO";

export interface IPriceEntryService {
  getCityPriceResponse(
    cityId: string | undefined
  ): Promise<{ data: CityPriceResponseDTO | null }>;
}

export default class PriceEntryServiceImpl implements IPriceEntryService {
  async getCityPriceResponse(
    cityId: string | undefined
  ): Promise<{ data: CityPriceResponseDTO | null }> {
    try {
      const response = await axiosClient.get(`/price-entries/${cityId}`);
      if (response && response.data) {
        return response;
      } else {
        return { data: null };
      }
    } catch (error) {
      console.error(
        `Error fetching Price Entries for city with ID ${cityId}: `,
        error
      );
      return { data: null };
    }
  }
}
