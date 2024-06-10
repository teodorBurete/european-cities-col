import { ICity } from "../../api/service/model/city/ICity";
import { ILocation } from "../../components/commons/MapComponent";

const formatCitiesToLocations = (cities: ICity[]): ILocation[] => {
  return cities.map((city) => ({
    id: city.id,
    name: city.name,
    lat: city.latitude,
    lng: city.longitude,
  }));
};

export default formatCitiesToLocations;
