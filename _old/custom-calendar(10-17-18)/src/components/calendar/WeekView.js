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
    const currentMonthYear = formatSetDate(this.props.currentDate, 'MMMM, YYYY');
    const newWeek = createWeekFunc(currentWeek, undefined, this.props.currentDate)[0];
    return (
      <section>
        <div className="week-view__month">
          <h4 className="week-view__month-display">{currentMonthYear}</h4>
          <CalendarViewSelectorArrows displayFormat="week-view__month-selector" dateFormat={'weeks'}/>
        </div>
        <div className="week-view-container">
          {newWeek.days.map((weekViewAssignedDate) => {
            return <DailyView key={weekViewAssignedDate} weekViewAssignedDate={weekViewAssignedDate} weekViewClasses="week-view-item" />;
          })}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps)(WeekView);
