import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@chakra-ui/react";
import L from "../../config/leaflet-config";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface Location {
  name: string;
  lat: number;
  lng: number;
}

interface MapComponentProps {
  cities: Location[];
}
const MapComponent: React.FC<MapComponentProps> = (
  props: MapComponentProps
) => {
  const { cities } = props;
  const centerPosition: [number, number] = [45.94, 24.96]; // Example position (latitude, longitude)
  const navigate = useNavigate();


  return (
    <Box height="100%" width="100%">
      <MapContainer
        center={centerPosition}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {cities.map((city, index) => (
          <Marker
            key={index}
            position={[city.lat, city.lng]}
            eventHandlers={{
              click: () => {
                navigate(`/city-prices/${city.name}`);
              },
            }}
          >
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
