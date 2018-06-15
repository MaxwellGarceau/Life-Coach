import moment from 'moment';
import { connect } from 'react-redux';

// NEW LOGIC FOR JUST USING DATE IN REDUX
export const formatSetDate = (prevDate, format = 'YYYY-MM-DD', amount = 0, unitOfTime = '') => {
  return moment(prevDate).add(amount, unitOfTime).format(format);
}

export const getWeekToMonth = (weekNum) => {
  return moment().week(weekNum).month();
}

// export const getMonth = (currentMonth) => (moment().add(currentMonth, 'months'));

export const getMonth = (currentMonth = '') => (moment().month(currentMonth));

// export const getYear = (currentYear) => (moment().add(currentYear, 'years'));

export const getYear = (currentYear = '') => (moment().year(currentYear));

export const timeArr = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

export const startWeekFunc = (currentYear, currentMonth, yearViewAssignedMonth = false) => getYear(currentYear).clone()
  .month((yearViewAssignedMonth || currentMonth))
  // .add(monthChange, 'months')
  .startOf('month')
  .week();

export const createWeekFunc = (calendarArr, week, currentYear) => {
  return calendarArr.push({
    week: week,
    days: Array(7)
      .fill(0)
      .map((n, i) =>
        getYear(currentYear).clone()
          .week(week)
        // parseInt(moment().week('06-14-2018').format('gg'))
        // moment(currentDate)
          .startOf('week')
          .clone()
          .add(n + i, 'day')
          .format('MM-DD-YYYY')
      )
  });
}

export const generateCalendarDates = (currentYear, currentMonth, yearViewAssignedMonth) => {
  // const year = moment().add(yearChange, 'years');
  // const month = moment().add(monthChange, 'months');
  // const year = getYear(yearChange);

  // const startWeek = getYear(currentYear).clone()
  //   .month((yearViewAssignedMonth || currentMonth))
  //   // .add(monthChange, 'months')
  //   .startOf('month')
  //   .week();

  const startWeek = startWeekFunc(currentYear, currentMonth, yearViewAssignedMonth);

  let endWeek = getYear(currentYear).clone()
    .month((yearViewAssignedMonth || currentMonth))
    // .add(monthChange, 'months')
    .endOf('month')
    .week();

  if (endWeek === 1) { endWeek = 53; }

  let calendar = [];
  for (let week = startWeek; week <= endWeek; week++) {
    // calendar.push({
    //   week: week,
    //   days: Array(7)
    //     .fill(0)
    //     .map((n, i) =>
    //       getYear(currentYear).clone()
    //         .week(week)
    //         .startOf('week')
    //         .clone()
    //         .add(n + i, 'day')
    //         .format('MM-DD-YYYY')
    //     )
    // });
    createWeekFunc(calendar, week, currentYear);
  }
  return calendar;
}
