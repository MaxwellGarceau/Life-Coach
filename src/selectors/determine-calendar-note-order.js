import { convertTimeToNumber } from './determine-elapsed-time';

const determineCalendarNoteOrder = (calendarNotesArr) => {
  calendarNotesArr.sort((a, b) => {
    // return convertTimeToNumber(b.currentStartTime) - convertTimeToNumber(a.currentStartTime);
    return convertTimeToNumber(a.currentStartTime) - convertTimeToNumber(b.currentStartTime);
  });
}

export default determineCalendarNoteOrder;