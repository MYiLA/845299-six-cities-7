import React from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { shallowEqual, useSelector } from 'react-redux';
import { MapProps } from './types';
import useMap from '../../hooks/useMap';
import { State } from '../../store/types';

function Map(props: MapProps): React.ReactElement {
  const { selectedPoint } = props;

  const { points, city } = useSelector((state: State) => ({
    points: state.hotels.filter(
      (hotel) => (hotel.city.name === state.activeCity.name),
    ),
    city: state.activeCity,
  }), shallowEqual);

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
