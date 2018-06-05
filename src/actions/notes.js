// import uuid from 'uuid';
import database from '../firebase/firebase';

export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
});

export const startAddNote = (noteData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      noteDescription = '',
      currentStartTime = '',
      currentEndTime = '',
      elapsedTime = []
    } = noteData;
    const note = { noteDescription, currentStartTime, currentEndTime, elapsedTime };

    return database
      .ref(`users/${uid}/notes`)
      .push(note)
      .then(ref => {
        dispatch(
          addNote({
            id: ref.key,
            ...note
          }));
      });
  };
}
