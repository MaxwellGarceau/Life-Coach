import database from '../firebase/firebase';

export const setYear = (currentYear) => ({
  type: 'SET_CURRENTYEAR',
  currentYear
});

export const startSetYear = (currentYearData) => {
  const currentYear = { currentYear: currentYearData };
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/calendar/current-year`)
      .set(currentYear)
      .then(() => {
        dispatch(
          setYear(currentYear));
      });
  };
}
