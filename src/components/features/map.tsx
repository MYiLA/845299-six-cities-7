import { PropsWithChildren, ReactElement, useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapParams } from './types';
import useMap from '../../hooks/useMap';
import { useCurrentHotels } from '../../utils/selectors/use-current-hotels';

function Map(params: PropsWithChildren<MapParams>): ReactElement {
  const { selectedPoint, activeCity } = params;
  const { currentHotels } = useCurrentHotels(activeCity);

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
      currentHotels.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (point.title === selectedPoint?.title) ? pinActive : pin,
          })
          .addTo(map);
      });
    }
  }, [map, currentHotels, pin, pinActive, selectedPoint]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    />
  );
}

export default Map;
