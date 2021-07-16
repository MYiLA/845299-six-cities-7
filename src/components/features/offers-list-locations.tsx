import { PropsWithChildren, ReactElement } from "react";
import { Link } from 'react-router-dom';
import { AppRoute } from "../../const";
import { Hotel } from "../../data-type";
import { getRoute } from "../../utils/common";
import CardFavorites from './card/card-favorites';

interface OffersListLocationParams {
  hotels: Hotel[],
}

interface LocationHotels {
  cityName: string,
  hotels: Hotel[],
}

function OffersListLocations(params: PropsWithChildren<OffersListLocationParams>): ReactElement {
  const { hotels } = params;
  const locationHotels: LocationHotels | any[] = [];
  console.log(hotels)
  hotels.forEach((hotel) => {
    // каждый отель нужно отсортировать по локациям.
    const isLocationFind = locationHotels.find((location) => location.cityName === hotel.city.name);

    if (isLocationFind) {
      // если локация уже есть
      // пушим отель в созданную локацию
      locationHotels.forEach((location) => {
        if (location.cityName === hotel.city.name) {
          location.hotels.push(hotel);
          return
        }
      })
      return
    }
    // если локация отсутствует
    // создаём локацию
    locationHotels.push({
      cityName: hotel.city.name,
      hotels: []
    })
    // пушим отель в созданную локацию
    locationHotels.forEach((location) => {
      if (location.cityName === hotel.city.name) {
        location.hotels.push(hotel);
        return
      }
    })
    return
  })

  console.log(locationHotels);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {locationHotels.map((location)=>(
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={getRoute(location.cityName)}>
                  <span>{location.cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {location.hotels.map((hotel: Hotel) => (
                <CardFavorites
                  key={hotel.id}
                  cardData={hotel}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OffersListLocations;
