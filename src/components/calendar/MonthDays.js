import React from 'react';
import { history } from '../../routers/AppRouter';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { startSetDate } from '../../actions/calendar';

export class MonthDays extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDayView = () => {
    console.log('Navigate to specific day view calendar with date/ID', this.props.date);
    this.props.startSetDate(this.props.date);
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

const mapDispatchToProps = dispatch => ({
  startSetDate: (currentDate) => dispatch(startSetDate(currentDate))
});

const mapStateToProps = (state, ownProps) => ({
  // Uncomment once I create calendarDay in redux store
  // calendarDay: state.calendarDate.find((date) => date.id === ownProps.date)
});

export default connect(undefined, mapDispatchToProps)(MonthDays);
