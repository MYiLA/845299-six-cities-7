import dayjs from 'dayjs';
import { AppRoute } from '../const';

const PERCENT = 100;
const TOTAL_RATING = 5;
export const HOMEPAGE = '/845299-six-cities-7/';

export const getRating = (part = 0):string => `${Math.round(part) * (PERCENT / TOTAL_RATING)}%`;
export const sortByNowToOld = (date1: string, date2: string) :number => dayjs(date2)
  .diff(dayjs(date1));

export const getRoute = (target: string, id?: number): string => {
  switch (target) {
    case AppRoute.MAIN:
      return HOMEPAGE;
    case AppRoute.OFFER:
      return `${HOMEPAGE}${target}${id ? `/${id}` : ''}`;
    default:
      return `${HOMEPAGE}${target}`;
  }
};
