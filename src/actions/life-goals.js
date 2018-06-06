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
