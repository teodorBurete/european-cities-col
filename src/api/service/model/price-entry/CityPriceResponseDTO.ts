import { ICity } from "../city/ICity";
import { IPriceEntryCategory } from "./IPriceEntryCategory";

export interface CityPriceResponseDTO {
  city: ICity;
  categories: IPriceEntryCategory;
}
