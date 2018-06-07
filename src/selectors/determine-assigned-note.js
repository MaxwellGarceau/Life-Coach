// Get life goal from redux and match to the note with the same life goal ID
export default (notesArr, defaultStartTime) => {
  return notesArr.filter((note) => {
    return note.elapsedTime.includes(defaultStartTime);
  });
}
