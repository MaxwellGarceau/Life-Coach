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
      currentDate = '',
      startDate = '',
      endDate = '',
      elapsedDates = []
    } = noteData;
    const note = { noteDescription, currentStartTime, currentEndTime, elapsedTime, goalId, currentDate, startDate, endDate, elapsedDates };

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

export const removeNote = (id) => ({
  type: 'REMOVE_NOTE',
  id
});

export const startRemoveNote = (noteId) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/notes/${noteId}`)
      .remove()
      .then((ref) => {
        dispatch(
          removeNote(noteId));
      });
  };
}

export const editNote = (editedNote) => ({
  type: 'EDIT_NOTE',
  editedNote
});

export const startEditNote = (editedNoteData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      id,
      noteDescription,
      currentStartTime,
      currentEndTime,
      elapsedTime,
      goalId,
      currentDate,
      startDate,
      endDate,
      elapsedDates
    } = editedNoteData;
    const editedNote = { noteDescription, currentStartTime, currentEndTime, elapsedTime, goalId, currentDate, startDate, endDate, elapsedDates };
    console.log(goalId);
    return database
      .ref(`users/${uid}/notes/${id}`)
      .update(editedNote)
      .then(() => {
        dispatch(
          editNote({
            id,
            ...editedNote
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
