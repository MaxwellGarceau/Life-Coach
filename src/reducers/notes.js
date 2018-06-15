const notesReducerDefaultState = [];

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.note];
    case 'REMOVE_NOTE':
      return state.filter((note) => note.id !== action.id);
    case 'EDIT_NOTE':
      return state.map((note) => {
        if (note.id === action.editedNote.id) {
          return {
            ...note,
            ...action.editedNote
          }
        } else {
          return note;
        }
      });
    case 'GET_NOTES':
      return action.notes;
    default:
      return state;
  }
}
