import React from 'react';
import { history } from '../../routers/AppRouter';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { startSetDate } from '../../actions/calendar';

// Component Logic
import { formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

export class MonthDays extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDayView = () => {
    console.log('Navigate to specific day view calendar with date/ID', this.props.currentDate);
    const dateUpdate = formatSetDate(this.props.date, undefined, undefined, undefined, 'MM-DD-YYYY');
    this.props.startSetDate(dateUpdate);
    history.push(`/calendar/day/${this.props.date}`);
  }
  render(props) {
    return (
      <div onClick={this.handleDayView}>
        {this.props.date}
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

export default connect(undefined, mapDispatchToProps)(MonthDays);
