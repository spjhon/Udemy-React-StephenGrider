import "leaflet/dist/leaflet.css";

// Este type es que se esta impotando una interfaz de un archivo independiente
import type { Place } from "../api/Place";
import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
//se utiliza una biblioteca para mostrar el mapa
import { MapContainer, TileLayer, Marker } from "react-leaflet";


//En esta interface se esta diciendo que los props que llegan que es un object llamado place va a tener los types que se importan
//o estos types pueden ser null tambien para el renderizado inicial
interface MapProps {
  place: Place | null;
}

export default function Map({ place }: MapProps) {
  //en e
  const mapRef = useRef<LeafletMap | null>(null);

  //el use effect es para cuando cambien los props en algun otro lado o en el componente padre.
  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[40.7, -74]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
  );
}
