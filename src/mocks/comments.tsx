const comments1 = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2020-07-08T12:13:56.569Z',
    id: 1,
    rating: 5,
    user: {
      avatar_url: 'img/avatar-angelina.png',
      id: 1,
      is_pro: true,
      name: 'Gena',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-04-08T14:13:56.569Z',
    id: 2,
    rating: 1,
    user: {
      avatar_url: 'img/avatar-angelina.png',
      id: 3,
      is_pro: true,
      name: 'Angelina',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 3,
    rating: 3,
    user: {
      avatar_url: 'img/avatar-max.png',
      id: 2,
      is_pro: false,
      name: 'Max',
    },
  },
];

const comments2 = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 4,
    rating: 3,
    user: {
      avatar_url: 'img/avatar-max.png',
      id: 2,
      is_pro: false,
      name: 'Max',
    },
  },
];

const comments3 = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 5,
    rating: 3,
    user: {
      avatar_url: 'img/avatar-max.png',
      id: 2,
      is_pro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 6,
    rating: 5,
    user: {
      avatar_url: 'img/avatar-max.png',
      id: 2,
      is_pro: false,
      name: 'Max',
    },
  },
];

const comments = new Map();

comments.set(1, comments1);
comments.set(2, comments2);
comments.set(3, comments3);
comments.set(4, []);

export const getCommentsData = (id:number):void => comments.get(id);
