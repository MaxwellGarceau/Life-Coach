// Get life goal from redux and match to the note with the same life goal ID
export default (notesArr = [], lifeGoalId) => {
  return notesArr.filter((note) => {
    return lifeGoalId === note.goalId;
  })
}
