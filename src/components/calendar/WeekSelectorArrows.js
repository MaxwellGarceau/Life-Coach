// 3rd Party Imports
import React from 'react';
import { connect } from 'react-redux';

// Redux
import { startSetDate } from '../../actions/calendar';

// Component Logic
import { formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

class MonthSelectorArrows extends React.Component {
  constructor(props) {
    super(props);
  }
  handleIncreaseWeek = () => {
  const dateUpdate = formatSetDate(this.props.currentDate, 'YYYY-MM-DD', 1, 'weeks');
  this.props.startSetDate(dateUpdate);
  };
  handleDecreaseWeek = () => {
  const dateUpdate = formatSetDate(this.props.currentDate, 'YYYY-MM-DD', -1, 'weeks');
  this.props.startSetDate(dateUpdate);
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
  startSetDate: (currentDate) => dispatch(startSetDate(currentDate))
});

const mapStateToProps = (state, ownProps) => ({
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthSelectorArrows);
