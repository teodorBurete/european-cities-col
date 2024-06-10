import { IPriceEntry } from "./IPriceEntry";

export interface IPriceEntryCategory {
  name: string;
  entries: IPriceEntry[];
}
