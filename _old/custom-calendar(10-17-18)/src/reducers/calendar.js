import moment from 'moment';

// Component Logic
// import { startWeekFunc } from '../component-logic/calendar/generate-calendar-dates';

const calendarReducerDefaultState = {
  // currentYear: moment().year(),
  // currentMonth: moment().month(),
  currentDate: moment().format('YYYY-MM-DD'),
  todaysDate: moment()
  // currentWeek: startWeekFunc(moment().year(), moment().month())
};

export default (state = calendarReducerDefaultState, action) => {
  switch (action.type) {
    // case 'SET_CURRENTYEAR':
    //   return {
    //     ...state,
    //     ...action.currentYear
    //   };
    // case 'SET_CURRENTMONTH':
    //   return {
    //     ...state,
    //     ...action.currentMonth
    //   };
    case 'SET_CURRENTDATE':
      return {
        ...state,
        ...action.currentDate
      };
    // case 'SET_CURRENTWEEK':
    //   return {
    //     ...state,
    //     ...action.currentWeek
    //   };
    default:
      return state;
  }
}
