const PERCENT = 100;
const TOTAL_RATING = 5;

export const getRating = (part = 0):string => `${(PERCENT * part) / TOTAL_RATING}%`;
