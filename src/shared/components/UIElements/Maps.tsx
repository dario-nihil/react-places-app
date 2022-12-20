import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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

  return (
    <MapContainer
      className={`${styles.map} ${className}`}
      style={style}
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
