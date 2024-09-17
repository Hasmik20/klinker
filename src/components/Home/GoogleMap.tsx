// MapComponent.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [51.505, -0.09]; // Example position (London)

function MapComponent() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>A simple popup in London.</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
