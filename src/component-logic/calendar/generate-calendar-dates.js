import moment from 'moment';

export const getMonth = (currentMonth) => (moment().add(currentMonth, 'months'));
