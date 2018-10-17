// 3rd Party Imports
import React from 'react';
import { connect } from 'react-redux';

// Redux
import { startSetDate } from '../../actions/calendar';

// Component Logic
import { formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

class CalendarViewSelectorArrows extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDateIncrease = () => {
  const dateUpdate = formatSetDate(this.props.currentDate, 'YYYY-MM-DD', 1, this.props.dateFormat);
  this.props.startSetDate(dateUpdate);
  };
  handleDateDecrease = () => {
  const dateUpdate = formatSetDate(this.props.currentDate, 'YYYY-MM-DD', -1, this.props.dateFormat);
  this.props.startSetDate(dateUpdate);
  };
  render (props) {
    return (
      <div className={`${this.props.displayFormat} calendar-date-selector`}>
        <span onClick={this.handleDateDecrease}><i className="fa fa-arrow-circle-left calendar-date-selector__button" /></span>
        <span onClick={this.handleDateIncrease}><i className="fa fa-arrow-circle-right calendar-date-selector__button" /></span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetDate: (currentDate) => dispatch(startSetDate(currentDate))
});

const mapStateToProps = (state, ownProps) => ({
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarViewSelectorArrows);
