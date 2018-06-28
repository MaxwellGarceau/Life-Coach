import { isNoteLengthAtLeastTwentyFourHours } from '../component-logic/notes/note-date-comparisons';

export default (notesArr, calendarDate) => {
  return notesArr.filter((note) => {
    const startDate = note.startDate;
    const startTime = note.currentStartTime;
    const endDate = note.endDate;
    const endTime = note.currentEndTime;
    const matchesDate = note.elapsedDates.filter((date) => date === calendarDate).length !== 0;
    console.log('matchesDate', matchesDate);
    return (
      matchesDate &&
      isNoteLengthAtLeastTwentyFourHours(startDate, startTime, endDate, endTime)
    );
  });
};
