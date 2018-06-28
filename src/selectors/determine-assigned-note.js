import { isNoteLengthUnderTwentyFourHours } from '../component-logic/notes/note-date-comparisons';
// Get life goal from redux and match to the note with the same life goal ID
export default (notesArr, /*defaultStartTime,*/ currentDate) => {
  return notesArr.filter((note) => {
    // return note.elapsedTime.includes(defaultStartTime) && note.currentDate === currentDate;
    const startDate = note.startDate;
    const startTime = note.currentStartTime;
    const endDate = note.endDate;
    const endTime = note.currentEndTime;
    return note.currentDate === currentDate && isNoteLengthUnderTwentyFourHours(startDate, startTime, endDate, endTime);
  });
}
