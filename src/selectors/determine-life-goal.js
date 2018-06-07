// Get life goal from redux and match to the note with the same life goal ID
export default (lifeGoalsArr, assignedNote = []) => {
  return lifeGoalsArr.filter((goal) => {
    for (let i = 0; i < assignedNote.length; i++) {
      return goal.id === assignedNote[i].goalId;
    }
  });
}
