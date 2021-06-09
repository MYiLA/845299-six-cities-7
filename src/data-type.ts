export interface Hotel {
  bedrooms: number,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string,
  },
  description: string,
  goods: Array<string>,
  host: {
    'avatar_url': string,
    id: number,
    'is_pro': boolean,
    name: string,
  },
  id: number,
  images: Array<string>,
  'is_favorite': boolean,
  'is_premium': boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  'max_adults': number,
  'preview_image': string,
  price: number,
  rating: number,
  title: string,
  type: string,
}
