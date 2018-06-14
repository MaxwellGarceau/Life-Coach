import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import YearView from './YearView';
import MonthView from './MonthView';
import WeekView from './WeekView';
import DailyView from './DailyView';
import { history } from '../../routers/AppRouter';

export class CalendarViewSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSelectedCalendarView = (selectedCalendarView) => {
    let selectedCalendarProps;
    switch(selectedCalendarView.target.value) {
        // Need to be specific about month/week/day      
      case 'YearView':
        // selectedCalendarView = YearView;
        history.push('/calendar/year');
        break;
      case 'MonthView':
        selectedCalendarView = MonthView;
        history.push('/calendar/month');
        break;
      case 'WeekView':
        // selectedCalendarView = WeekView;
        history.push('/calendar/week');
        break;
      case 'DailyView':
        // selectedCalendarView = DailyView;
        history.push(`/calendar/day/${this.props.currentDate}`);
        break;
      default:
        // selectedCalendarView = DailyView;
        history.push('/calendar');
        break;
    }
    // this.props.handleSelectedCalendarView(selectedCalendarView, selectedCalendarProps);
  }
  render(props) {
    return (
      <div>
        <h6>Calendar View Selector (DELETE ME)</h6>
        <button value='YearView' onClick={this.handleSelectedCalendarView}>Year</button>
        <button value='MonthView' onClick={this.handleSelectedCalendarView}>Month</button>
        <button value='WeekView' onClick={this.handleSelectedCalendarView}>Week</button>
        <button value='DailyView' onClick={this.handleSelectedCalendarView}>Day</button>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps)(CalendarViewSelector);
