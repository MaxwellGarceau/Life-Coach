import React from 'react';
import { history } from '../../routers/AppRouter';
import { connect } from 'react-redux';
// import moment from 'moment';
import DailyViewRow from './DailyViewRow';
// import CalendarViewSelector from './CalendarViewSelector';

// Redux
import { startSetDate } from '../../actions/calendar';

// Component Logic
import { timeArr, formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

export class DailyView extends React.Component {
  constructor (props) {
    super(props);
  }
  handleGoToDay = () => {
    if (this.props.weekViewAssignedDate) {
      const dateUpdate = formatSetDate(this.props.weekViewAssignedDate, 'YYYY-MM-DD', 0, '', 'MM-DD-YYYY');
      console.log('dateupdate', dateUpdate);
      this.props.startSetDate(dateUpdate);
      history.push(`/calendar/day/${this.props.weekViewAssignedDate}`);
    }
  }
  render (props) {
    // const currentDate = this.props.match ? moment(new Date(this.props.match.params.id)) : '';
    const reduxCurrentDate = this.props.currentDate;
    const weekViewAssignedDate = this.props.weekViewAssignedDate;
    const currentDate = weekViewAssignedDate || reduxCurrentDate;
    // console.log(currentDate);

    return (
      <section>
        {/*<h1>{!!this.props.match ? currentDate.format('dddd') : 'Fix this.props.match.params.id'}</h1>
        <h2>Current date: {!!this.props.match ? currentDate.format('MMMM Do, YYYY') : 'Fix this.props.match.params.id'}</h2>*/}
        <h1 onClick={this.handleGoToDay}>{currentDate}</h1>
        <h2>Current date: {currentDate}</h2>
        <div className="calendar">
          {timeArr.map((defaultStartTime) => {
            return <DailyViewRow key={defaultStartTime} currentDate={currentDate} defaultStartTime={defaultStartTime} />;
          })}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetDate: (currentDate) => dispatch(startSetDate(currentDate))
});

const mapStateToProps = (state, ownProps) => ({
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyView);
