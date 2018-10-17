import { formatSetDate } from '../component-logic/calendar/generate-calendar-dates';

export const determineElapsedDates = (startDate, endDate) => {
  let now = startDate.clone();
  const dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push(formatSetDate(now));
    now.add(1, 'days');
  }
  return dates;
};
