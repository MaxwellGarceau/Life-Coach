// 3rd Party
import moment from 'moment';

// Component Logic
import { convertTimeToNumber } from '../../selectors/determine-elapsed-time';

export const isNoteLengthAtLeastTwentyFourHours = (startDate, startTime, endDate, endTime) => {
  const startDateAndTime = moment(startDate).hour(convertTimeToNumber(startTime));
  const endDateAndTime = moment(endDate).hour(convertTimeToNumber(endTime));
  return endDateAndTime.diff(startDateAndTime, 'hours') >= 24;
}

export const isNoteLengthUnderTwentyFourHours = (startDate, startTime, endDate, endTime) => {
  const startDateAndTime = moment(startDate).hour(convertTimeToNumber(startTime));
  const endDateAndTime = moment(endDate).hour(convertTimeToNumber(endTime));
  return endDateAndTime.diff(startDateAndTime, 'hours') < 24;
}
