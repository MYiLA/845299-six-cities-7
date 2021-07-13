import { PropsWithChildren, ReactElement, useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapParams } from './types';
import useMap from '../../hooks/useMap';

function Map(params: PropsWithChildren<MapParams>): ReactElement {
  const { selectedPoint, activeCity, hotels } = params;

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef.current, activeCity);

  const pin = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 45],
    iconAnchor: [15, 45],
  });

  const pinActive = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 45],
    iconAnchor: [15, 45],
  });

  useEffect(() => {
    if (map) {
      hotels.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (point.id === selectedPoint?.id) ? pinActive : pin,
          })
          .addTo(map);
      });
    }
  }, [map, hotels, pin, pinActive, selectedPoint]);

  useEffect(() => {
    map?.setView(
      leaflet.latLng(activeCity.location.latitude, activeCity.location.longitude),
      activeCity.location.zoom
    )
  }, [activeCity])

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    />
  );
}

export default Map;
