// 3rd Party Imports
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Redux
import { startSetYear, startSetMonth } from '../../actions/calendar';

// Component Logic
import { generateCalendarDates, getMonth, getYear } from '../../component-logic/calendar/generate-calendar-dates';

class MonthSelectorArrows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: this.props.currentMonth
    }
  }
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
      // const yearUpdateIncrease = (!this.props.currentYear ? 0 : this.props.currentYear) + 1;
      this.props.startSetYear(this.props.currentYear + 1);
  };
  handleDecreaseYear = () => {
      // const yearUpdateDecrease = (!this.props.currentYear ? 0 : this.props.currentYear) - 1;
      this.props.startSetYear(this.props.currentYear - 1);
  };
  render (props) {
    return (
      <div>
        <span onClick={this.handleDecreaseMonth}><i className="fa fa-arrow-circle-left" /></span>
        <span onClick={this.handleIncreaseMonth}><i className="fa fa-arrow-circle-right" /></span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetMonth: (currentMonth) => dispatch(startSetMonth(currentMonth)),
  startSetYear: (currentYear) => dispatch(startSetYear(currentYear))
});

const mapStateToProps = (state, ownProps) => ({
  currentYear: state.calendar.currentYear,
  currentMonth: state.calendar.currentMonth
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthSelectorArrows);
