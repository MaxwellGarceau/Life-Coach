// 3rd Party
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Component Logic
import { formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';
import { convertTimeToNumber } from '../../selectors/determine-elapsed-time';

// Other Components
// import DailyViewModal from './DailyViewModal';

class CalendarNote extends React.Component {
  render (props) {
    const calendarNoteDateAndTime = moment(this.props.assignedNote.currentDate).hour(convertTimeToNumber(this.props.assignedNote.currentStartTime));
    let isPastEvent = calendarNoteDateAndTime.isBefore(this.props.todaysDate) ? 'past-calendar-events-contrast' : '';
    return (
      <div onClick={() => this.props.onToggleModal(this.props.assignedNote)} className={`${this.props.classNameObj} ${isPastEvent}`} style={this.props.styleObj}>
        <div>
          <div className="calendar-content__note-description">
            {this.props.assignedNote.noteDescription}
          </div>
          <div className="calendar-content__start-end-time">
            {this.props.assignedNote.currentStartTime} - {this.props.assignedNote.currentEndTime}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todaysDate: state.todaysDate
})

export default connect(mapStateToProps)(CalendarNote);
