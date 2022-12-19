import { LatLngExpression } from "leaflet";
import { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";

import ICoord from "../../interfaces/ICoord";
import styles from "./Maps.module.css";

type MapProps = {
  className?: string;
  style?: React.CSSProperties;
  center: ICoord;
  zoom: number;
};

const Maps = (props: MapProps) => {
  const { className, style, center, zoom } = props;
  const position = Object.values(center) as LatLngExpression;
  console.log(position);

  const mapRef = useRef<HTMLDivElement>(null);

  return (
    // <div
    //   id="map"
    //   ref={mapRef}
    //   className={`${styles.map} ${className}`}
    //   style={style}
    // ></div>
    <MapContainer
      className={`${styles.map} ${className}`}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
