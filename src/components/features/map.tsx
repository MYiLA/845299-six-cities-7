import React from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapProps } from './types';
import useMap from '../../hooks/useMap';

// TODO доделать по скринкасту карту, так как она не может найти контейнер из-за того,
// что это пытается делать в неправильном жизненном цикле компонента

function Map(props: MapProps): React.ReactElement {
  const { city, points, selectedPoint } = props;
  const mapRef = React.useRef<HTMLDivElement>(null);
  const map = useMap(mapRef.current, city);

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

  React.useEffect(() => {
    if (map) {
      points.forEach((point) => {
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
  }, [map, points, pin, pinActive, selectedPoint]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    />
  );
}

export default Map;
