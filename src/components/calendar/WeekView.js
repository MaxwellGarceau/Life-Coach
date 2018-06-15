import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';

// Component Imports
import WeekSelectorArrows from './WeekSelectorArrows';
import MonthDays from './MonthDays';
import CalendarViewSelector from './CalendarViewSelector';
import DailyView from './DailyView';

// Component Logic
import { generateCalendarDates, startWeekFunc, createWeekFunc } from '../../component-logic/calendar/generate-calendar-dates';

class WeekView extends React.Component {
  // constructor (props) {
  //   super(props);

  // }
  render (props) {
    let calendar = [];
    createWeekFunc(calendar, this.props.currentWeek, this.props.currentYear);
    // console.log(createWeekFunc(calendar, startWeekFunc(this.props.currentYear, this.props.currentMonth), this.props.currentYear));
    return (
      <section>
        <h4>WEEK BREAK</h4>
        <WeekSelectorArrows />
        {calendar[0].days.map((weekViewAssignedDate) => {
          return <DailyView key={weekViewAssignedDate} weekViewAssignedDate={weekViewAssignedDate} />;
        })}
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentYear: state.calendar.currentYear,
  currentMonth: state.calendar.currentMonth,
  currentWeek: state.calendar.currentWeek,
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps)(WeekView);
