import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
import YearView from './YearView';
import MonthView from './MonthView';
import DailyView from '../DailyView';

export class CalendarViewSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSelectedCalendarView = (selectedCalendarView) => {
    let selectedCalendarProps;
    switch(selectedCalendarView.target.value) {
      case 'YearView':
        selectedCalendarView = YearView;
        break;
      case 'MonthView':
        selectedCalendarView = MonthView;
        break;
      case 'DailyView':
        selectedCalendarView = DailyView;
        break;
      default:
        selectedCalendarView = DailyView;
        break;
    }
    this.props.handleSelectedCalendarView(selectedCalendarView, selectedCalendarProps);
  }
  render(props) {
    return (
      <div>
        <h6>Calendar View Selector (DELETE ME)</h6>
        <button value='YearView' onClick={this.handleSelectedCalendarView}>Year</button>
        <button value='MonthView' onClick={this.handleSelectedCalendarView}>Month</button>
        <button value='DailyView' onClick={this.handleSelectedCalendarView}>Day</button>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(CalendarViewSelector);
