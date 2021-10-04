import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IconLocation } from "./IconLocation";

const Map = (props) => {
  const { places } = props;
  console.log(places);
  return (
    <MapContainer
      center={[4.626354219802424, -74.12551739709227]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place, i) => {
        const { attributes } = place;
        const { geometry } = place;
        const { x, y } = geometry;
        return (
          <>
            <Marker icon={IconLocation} position={[y, x]} key={i}>
              <Popup>
                {attributes.nombre_estacion} <br />{" "}
                {attributes.ubicacion_estacion}
              </Popup>
            </Marker>
          </>
        );
      })}
    </MapContainer>
  );
};

export default Map;
