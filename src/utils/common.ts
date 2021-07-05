import { AppRoute } from "../const";

const PERCENT = 100;
const TOTAL_RATING = 5;

export const getRating = (part = 0):string => `${(PERCENT * part) / TOTAL_RATING}%`;

export const getRoute = (target: string, id?: number) => {
  switch (target) {
    case AppRoute.MAIN:
      return '/';
    case AppRoute.OFFER:
      return `/${target}/${id}`;
    default:
      return `/${target}`;
  }
}
