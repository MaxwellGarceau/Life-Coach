const notesReducerDefaultState = [];

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENTYEAR':
      return action.currentYear;
    default:
      return state;
  }
}
