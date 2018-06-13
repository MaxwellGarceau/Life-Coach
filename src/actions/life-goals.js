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
      .ref(`users/${uid}/goals`)
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
    return database.ref(`users/${uid}/goals/${id}`).update(updates).then(() => {
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
    return database.ref(`users/${uid}/goals/${id}`).remove().then(() => {
      dispatch(removeLifeGoal({ id }));
    });
  };
}

export const getGoals = (goals) => ({
  type: 'GET_LIFEGOALS',
  goals
});

export const startGetGoals = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/goals`).once('value').then((snapshot) => {
      const goals = [];

      snapshot.forEach((childSnapshot) => {
        goals.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(getGoals(goals));
    });
  };
};
