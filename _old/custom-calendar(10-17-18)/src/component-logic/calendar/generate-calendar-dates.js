import moment from 'moment';

// NEW LOGIC FOR JUST USING DATE IN REDUX
export const formatSetDate = (inputDate, format = 'YYYY-MM-DD', amount = 0, unitOfTime = 'seconds', inputDateFormat = '') => {
  return moment(inputDate, inputDateFormat).clone().add(amount, unitOfTime).format(format);
}

// END NEW LOGIC

export const getWeekToMonth = (weekNum) => {
  return moment().week(weekNum).month();
}

// export const getMonth = (currentMonth) => (moment().add(currentMonth, 'months'));

export const getMonth = (currentMonth = '') => (moment().month(currentMonth));

// export const getYear = (currentYear) => (moment().add(currentYear, 'years'));

export const getYear = (currentYear = '') => (moment().year(currentYear));

export const timeArr = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

// NEW LOGIC BEGIN
export const startWeekFunc = (currentDate, yearViewAssignedMonth = false) => {
  const monthMoment = yearViewAssignedMonth ? moment(yearViewAssignedMonth, 'MMMM') : moment(currentDate);

  return monthMoment
    .clone()
    .startOf('month')
    .week();
};
export const endWeekFunc = (currentDate, yearViewAssignedMonth = false) => {
  const monthMoment = yearViewAssignedMonth ? moment(yearViewAssignedMonth, 'MMMM') : moment(currentDate);

  return monthMoment
    .clone()
    .endOf('month')
    .week();
};

export const createWeekFunc = (startWeek, endWeek = startWeek, currentDate) => {
  let calendarArr = []
  for (let week = startWeek; week <= endWeek; week++) {
    calendarArr.push({
      week: week,
      days: Array(7)
        .fill(0)
        .map((n, i) =>
          moment(currentDate)
            .week(week)
            .startOf('week')
            .clone()
            .add(n + i, 'day')
            .format('MM-DD-YYYY')
        )
    });
  }
  return calendarArr;
};

export const generateCalendarDates = (currentDate, yearViewAssignedMonth) => {
  const startWeek = startWeekFunc(currentDate, yearViewAssignedMonth);
  let endWeek = endWeekFunc(currentDate, yearViewAssignedMonth);

  if (endWeek === 1) {
    endWeek = 53;
  }
  return createWeekFunc(startWeek, endWeek, currentDate);
}

// END NEW LOGIC

// export const createWeekFunc = (calendarArr, week, currentYear) => {
//   return calendarArr.push({
//     week: week,
//     days: Array(7)
//       .fill(0)
//       .map((n, i) =>
//         getYear(currentYear).clone()
//           .week(week)
//         // parseInt(moment().week('06-14-2018').format('gg'))
//         // moment(currentDate)
//           .startOf('week')
//           .clone()
//           .add(n + i, 'day')
//           .format('MM-DD-YYYY')
//       )
//   });
// }

// export const generateCalendarDates = (currentYear, currentMonth, yearViewAssignedMonth) => {
//   // const year = moment().add(yearChange, 'years');
//   // const month = moment().add(monthChange, 'months');
//   // const year = getYear(yearChange);

//   // const startWeek = getYear(currentYear).clone()
//   //   .month((yearViewAssignedMonth || currentMonth))
//   //   // .add(monthChange, 'months')
//   //   .startOf('month')
//   //   .week();

//   const startWeek = startWeekFunc(currentYear, currentMonth, yearViewAssignedMonth);

//   let endWeek = getYear(currentYear).clone()
//     .month((yearViewAssignedMonth || currentMonth))
//     // .add(monthChange, 'months')
//     .endOf('month')
//     .week();

//   if (endWeek === 1) { endWeek = 53; }

//   let calendar = [];
//   for (let week = startWeek; week <= endWeek; week++) {
//     // calendar.push({
//     //   week: week,
//     //   days: Array(7)
//     //     .fill(0)
//     //     .map((n, i) =>
//     //       getYear(currentYear).clone()
//     //         .week(week)
//     //         .startOf('week')
//     //         .clone()
//     //         .add(n + i, 'day')
//     //         .format('MM-DD-YYYY')
//     //     )
//     // });
//     createWeekFunc(calendar, week, currentYear);
//   }
//   return calendar;
// }
