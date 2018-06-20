// Get life goal from redux and match to the note with the same life goal ID
export default (notesArr, /*defaultStartTime,*/ currentDate) => {
  return notesArr.filter((note) => {
    // return note.elapsedTime.includes(defaultStartTime) && note.currentDate === currentDate;
    return note.currentDate === currentDate;
  });
}
