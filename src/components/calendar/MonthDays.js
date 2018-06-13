import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../routers/AppRouter';
import moment from 'moment';

export class MonthView extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDayView = () => {
    console.log('Navigate to specific day view calendar with date/ID', this.props.date);
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

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({
  // Uncomment once I create calendarDay in redux store
  // calendarDay: state.calendarDate.find((date) => date.id === ownProps.date)
});

export default connect(mapStateToProps)(MonthView);
