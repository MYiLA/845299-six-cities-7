/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PropsWithChildren, ReactElement, useEffect, useRef
} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapParams } from './types';
import useMap from '../../hooks/useMap';

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

const markers: leaflet.Marker<any>[] = [];

function Map(params: PropsWithChildren<MapParams>): ReactElement {
  const { selectedPoint, activeCity, hotels } = params;

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef.current, activeCity);

  useEffect(() => {
    if (map) {
      markers.forEach((marker) => {
        marker.remove();
      });

      hotels.forEach((point) => {
        markers.push(
          leaflet
            .marker({
              lat: point.location.latitude,
              lng: point.location.longitude,
            }, {
              icon: (point.id === selectedPoint?.id) ? pinActive : pin,
            })
            .addTo(map),
        );
      });
    }
  }, [map, hotels, pin, pinActive, selectedPoint]);

  useEffect(() => {
    map?.flyTo(
      leaflet.latLng(activeCity.location.latitude, activeCity.location.longitude),
      activeCity.location.zoom,
      {
        animate: true,
        duration: 1,
        easeLinearity: 0.3,
      },
    );
  }, [map, activeCity]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    />
  );
}

export default Map;
