const PERCENT = 100;
const TOTAL_RATING = 5;

export const getRating = (part: number):string => `${(PERCENT * part) / TOTAL_RATING}%`;
