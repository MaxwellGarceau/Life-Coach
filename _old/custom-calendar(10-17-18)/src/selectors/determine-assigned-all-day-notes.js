import { isNoteLengthAtLeastTwentyFourHours } from '../component-logic/notes/note-date-comparisons';

export default (notesArr, calendarDate = undefined) => {
  return notesArr.filter((note) => {
    const startDate = note.startDate;
    const startTime = note.currentStartTime;
    const endDate = note.endDate;
    const endTime = note.currentEndTime;
    let matchesDate;
    if (!calendarDate) {
      matchesDate = true;
    } else {
      matchesDate = note.elapsedDates.filter((date) => date === calendarDate).length !== 0;
    }
    return (
      matchesDate &&
      isNoteLengthAtLeastTwentyFourHours(startDate, startTime, endDate, endTime)
    );
  });
};
