import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import CalendarViewSelector from './CalendarViewSelector';
import YearView from './YearView';
import MonthView from './MonthView';
import WeekView from './WeekView';
import DailyView from '../DailyView';

export class Calendar extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     selectedCalendarView: DailyView,
  //     selectedCalendarProps: {}
  //   }
  // }

  // handleSelectedCalendarView = (selectedCalendarView, selectedCalendarProps = {}) => {
  //   this.setState({
  //     selectedCalendarView,
  //     selectedCalendarProps
  //   });
  // }
  render (props) {
    // const SelectedCalendarView = this.state.selectedCalendarView;
    return (
      <section>
        <CalendarViewSelector />
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(Calendar);
