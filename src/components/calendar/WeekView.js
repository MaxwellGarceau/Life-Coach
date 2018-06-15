import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';

// Component Imports
import CalendarViewSelectorArrows from './CalendarViewSelectorArrows';
// import MonthDays from './MonthDays';
// import CalendarViewSelector from './CalendarViewSelector';
import DailyView from './DailyView';

// Component Logic
import { createWeekFunc, formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

class WeekView extends React.Component {
  // constructor (props) {
  //   super(props);

  // }
  render (props) {
    const currentWeek = formatSetDate(this.props.currentDate, 'w');
    const newWeek = createWeekFunc(currentWeek, undefined, this.props.currentDate)[0];
    return (
      <section>
        <h4>WEEK BREAK</h4>
        <CalendarViewSelectorArrows dateFormat={'weeks'}/>
        {newWeek.days.map((weekViewAssignedDate) => {
          return <DailyView key={weekViewAssignedDate} weekViewAssignedDate={weekViewAssignedDate} />;
        })}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps)(WeekView);
