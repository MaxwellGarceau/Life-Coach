// 3rd Party
import moment from 'moment';

// Component Logic
import { convertTimeToNumber } from '../../selectors/determine-elapsed-time';

export const isNoteLengthAtLeastTwentyFourHours = (startDate, startTime, endDate, endTime) => {
  const startDateAndTime = moment(startDate).hour(convertTimeToNumber(startTime));
  const endDateAndTime = moment(endDate).hour(convertTimeToNumber(endTime));
  console.log('startDateTime', startDateAndTime);
  console.log('endDateTime', endDateAndTime);
  console.log('startEndComparison', endDateAndTime.diff(startDateAndTime, 'hours'));
  return endDateAndTime.diff(startDateAndTime, 'hours') >= 24;
}
