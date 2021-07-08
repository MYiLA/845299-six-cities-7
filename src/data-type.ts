export interface City {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  name: string,
}
export interface Hotel {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  },
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

export interface CommentGet {
  comment: string,
  date: string,
  id: number,
  rating: number
}

export interface CommentPost {
  comment: string,
  rating: number
}

export interface AuthInfo {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
  token: string,
}
