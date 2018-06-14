// 3rd Party Imports
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Redux
import { startSetYear, startSetMonth, startSetWeek } from '../../actions/calendar';

// Component Logic
import { generateCalendarDates, getMonth, getYear, getWeekToMonth } from '../../component-logic/calendar/generate-calendar-dates';

class MonthSelectorArrows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: this.props.currentMonth,
      currentWeek: this.props.currentWeek
    }
  }
  handleIncreaseWeek = () => {
    this.setState((prevState) => ({ currentWeek: prevState.currentWeek += 1 }), () => {
        if (getWeekToMonth(this.props.currentWeek) !== getWeekToMonth(this.state.currentWeek)) {
          this.handleIncreaseMonth();
        }
      this.props.startSetWeek(this.state.currentWeek);
    });
  };
  handleDecreaseWeek = () => {
    this.setState((prevState) => ({ currentWeek: prevState.currentWeek -= 1 }), () => {
        if (getWeekToMonth(this.props.currentWeek) !== getWeekToMonth(this.state.currentWeek)) {
          this.handleDecreaseMonth();
        }
      this.props.startSetWeek(this.state.currentWeek);
    });
  };
  handleIncreaseMonth = () => {
    this.setState((prevState) => ({ currentMonth: prevState.currentMonth += 1 }), () => {
      this.props.startSetMonth(this.state.currentMonth)
        if ('January' === getMonth(this.state.currentMonth).clone().format('MMMM')) {
          this.handleIncreaseYear();
        }
    });
  };
  handleDecreaseMonth = () => {
    this.setState((prevState) => ({ currentMonth: prevState.currentMonth -= 1 }), () => {
      this.props.startSetMonth(this.state.currentMonth);
      if ('December' === getMonth(this.state.currentMonth).clone().format('MMMM')) {
        this.handleDecreaseYear();
      }
    });
  };
  handleIncreaseYear = () => {
      this.props.startSetYear(this.props.currentYear + 1);
  };
  handleDecreaseYear = () => {
      this.props.startSetYear(this.props.currentYear - 1);
  };
  render (props) {
    return (
      <div>
        <span onClick={this.handleDecreaseWeek}><i className="fa fa-arrow-circle-left" /></span>
        <span onClick={this.handleIncreaseWeek}><i className="fa fa-arrow-circle-right" /></span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetMonth: (currentMonth) => dispatch(startSetMonth(currentMonth)),
  startSetYear: (currentYear) => dispatch(startSetYear(currentYear)),
  startSetWeek: (currentWeek) => dispatch(startSetWeek(currentWeek))
});

const mapStateToProps = (state, ownProps) => ({
  currentYear: state.calendar.currentYear,
  currentMonth: state.calendar.currentMonth,
  currentWeek: state.calendar.currentWeek
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthSelectorArrows);
