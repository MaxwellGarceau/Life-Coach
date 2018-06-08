// import uuid from 'uuid';
import database from '../firebase/firebase';

export const addLifeGoal = (lifeGoal) => ({
  type: 'ADD_LIFEGOAL',
  lifeGoal
});

export const startAddLifeGoal = (lifeGoalData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      goalColor = '',
      goalTitle = '',
      goalDescription = ''
    } = lifeGoalData;
    const lifeGoal = { goalColor, goalTitle, goalDescription };

    return database
      .ref(`users/${uid}/life-goals`)
      .push(lifeGoal)
      .then(ref => {
        dispatch(
          addLifeGoal({
            id: ref.key,
            ...lifeGoal
          }));
      });
  };
}

export const editLifeGoal = (id, updates) => ({
  type: 'EDIT_LIFEGOAL',
  id,
  updates
});

export const startEditLifeGoal = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/life-goals/${id}`).update(updates).then(() => {
      dispatch(editLifeGoal(id, updates));
    });
  };
}

export const removeLifeGoal = ({ id } = {}) => ({
  type: 'REMOVE_LIFEGOAL',
  id
});

export const startRemoveLifeGoal = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/life-goals/${id}`).remove().then(() => {
      dispatch(removeLifeGoal({ id }));
    });
  };
}
