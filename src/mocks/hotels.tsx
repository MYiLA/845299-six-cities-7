const hotel1 = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 152.370216,
      longitude: 40.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/apartement-01.jpg', 'img/apartement-02.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 152.35514938496378,
    longitude: 40.673877537499948,
    zoom: 8,
  },
  maxAdults: 3,
  previewImage: 'img/apartement-01.jpg',
  price: 120,
  rating: 2.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const hotel2 = {
  bedrooms: 2,
  city: {
    location: {
      latitude: 132.370216,
      longitude: 14.895168,
      zoom: 10,
    },
    name: 'Paris',
  },
  description: '',
  goods: ['Heating', 'Kitchen', 'Cable TV'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 2,
  images: ['img/apartement-03.jpg', 'img/apartement-01.jpg'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 132.35514938496378,
    longitude: 14.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartement-03.jpg',
  price: 420,
  rating: 5,
  title: 'Beautiful',
  type: 'apartment',
};

const hotel3 = {
  bedrooms: 5,
  city: {
    location: {
      latitude: 42.370216,
      longitude: 47.895168,
      zoom: 10,
    },
    name: 'Brussels',
  },
  description: 'A quiet cozy and of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 3,
  images: ['img/apartement-03.jpg', 'img/apartement-02.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 42.35514938496378,
    longitude: 47.673877537499948,
    zoom: 8,
  },
  maxAdults: 10,
  previewImage: 'img/apartement-02.jpg',
  price: 1020,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location Beautiful & luxurious studio at great location',
  type: 'private room',
};

const hotel4 = {
  bedrooms: 1,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 4,
  images: ['img/studio-01.png', 'img/room.png'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 1,
  previewImage: 'img/studio-01.png',
  price: 20,
  rating: 0.8,
  title: '',
  type: 'apartment',
};

export const hotelsData = [hotel1, hotel2, hotel3, hotel4];
