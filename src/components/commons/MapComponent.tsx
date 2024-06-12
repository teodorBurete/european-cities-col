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

export interface ILocation {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

interface MapComponentProps {
  cities: ILocation[];
  zoom?: number;
  height?: string;
  width?: string;
  center?: [number, number];
  markerUrl?:string;
}

const MapComponent: React.FC<MapComponentProps> = (
  props: MapComponentProps
) => {
  const { cities, zoom, height, width, center,markerUrl } = props;
  const navigate = useNavigate();

  return (
    <Box height={height || "100%"} width={width || "100%"} mt={4} zIndex={0}>
      <MapContainer
        center={center || [45.94, 24.96]}
        zoom={zoom || 6}
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
              click: () => { markerUrl ? 
                navigate(`${markerUrl}${city.id}`) : navigate(``)
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
