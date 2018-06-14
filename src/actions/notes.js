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
      elapsedTime = [],
      goalId = '',
      currentDate = ''
    } = noteData;
    const note = { noteDescription, currentStartTime, currentEndTime, elapsedTime, goalId, currentDate };

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

export const getNotes = (notes) => ({
  type: 'GET_NOTES',
  notes
});

export const startGetNotes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/notes`).once('value').then((snapshot) => {
      const notes = [];

      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(getNotes(notes));
    });
  };
};
