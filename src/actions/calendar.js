// import database from '../firebase/firebase';
// import thunk from 'redux-thunk';

export const setYear = (currentYear) => ({
  type: 'SET_CURRENTYEAR',
  currentYear
});

export const startSetYear = (currentYearData) => {
  const currentYear = { currentYear: currentYearData };
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database
    //   .ref(`users/${uid}/calendar/current-year`)
    //   .set(currentYear)
    //   .then(() => {
    dispatch(
      setYear(currentYear));
  // });
  };
}

export const setMonth = (currentMonth) => ({
  type: 'SET_CURRENTMONTH',
  currentMonth
});

export const startSetMonth = (currentMonthData) => {
  const currentMonth = { currentMonth: currentMonthData };
  return (dispatch, getState) => {
    dispatch(setMonth(currentMonth));
  };
}

export const setDate = (currentDate) => ({
  type: 'SET_CURRENTDATE',
  currentDate
});

export const startSetDate = (currentDateData) => {
  const currentDate = { currentDate: currentDateData };
  return (dispatch, getState) => {
    dispatch(setDate(currentDate));
  };
}

export const setWeek = (currentWeek) => ({
  type: 'SET_CURRENTWEEK',
  currentWeek
});

export const startSetWeek = (currentWeekData) => {
  const currentWeek = { currentWeek: currentWeekData };
  return (dispatch, getState) => {
    dispatch(setWeek(currentWeek));
  };
}
