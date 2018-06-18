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
        <div className="calendar calendar__container">
          {timeArr.map((defaultStartTime, ind) => {
            return <DailyViewRow key={defaultStartTime} currentDate={currentDate} defaultStartTime={defaultStartTime} rowNum={ind + 1} />;
          })}
          <div className="calendar__container-event">
            {/* Create a CalendarEvent component instead of using a div */}
            <div className="calendar__item-event" style={{gridRow: '2 / 5', zIndex: '3', gridColumn: '1 / 2'}}>Created calendar events go here.</div>
          </div>
        </div>
        {/*<div className="calendar-event-container">
          <div className="calendar-event-test">Created calendar events go here.</div>
          <div className="calendar-event-test">Second overlapping calendar event</div>
        </div>*/}
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
