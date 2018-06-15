// 3rd Party Components
import React from 'react';
import { history } from '../../routers/AppRouter';
import { connect } from 'react-redux';

// Redux
import { startSetDate } from '../../actions/calendar';

// Components
import DailyViewRow from './DailyViewRow';
import CalendarViewSelectorArrows from './CalendarViewSelectorArrows';

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
    const reduxCurrentDate = this.props.currentDate;
    const weekViewAssignedDate = this.props.weekViewAssignedDate ? formatSetDate(this.props.weekViewAssignedDate, 'YYYY-MM-DD', 0, '', 'MM-DD-YYYY') : false;
    const currentDate = weekViewAssignedDate || reduxCurrentDate;
    const currentDateFormat = formatSetDate(currentDate, 'MM-DD-YYYY');
    return (
      <section>
        {!weekViewAssignedDate &&
          <CalendarViewSelectorArrows dateFormat={'days'}/>
        }
        <h1 onClick={this.handleGoToDay}>{currentDateFormat}</h1>
        <h2>Current date: {currentDateFormat}</h2>
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
