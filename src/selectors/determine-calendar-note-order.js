import { convertTimeToNumber } from './determine-elapsed-time';

export const determineCalendarNoteOrder = (calendarNotesArr) => {
  calendarNotesArr.sort((a, b) => {
    // return convertTimeToNumber(b.currentStartTime) - convertTimeToNumber(a.currentStartTime);
    return convertTimeToNumber(a.currentStartTime) - convertTimeToNumber(b.currentStartTime);
  });
}

export const determineGreatestElapsedTime = (elapsedTimeArr, lastGroupEndTime) => {
  let greatestElapsedTimeNumArr = elapsedTimeArr.map((time) => convertTimeToNumber(time));
  greatestElapsedTimeNumArr.push(lastGroupEndTime);
  return greatestElapsedTimeNumArr.reduce((a, b) => Math.max(a, b));
}

export default determineCalendarNoteOrder;
