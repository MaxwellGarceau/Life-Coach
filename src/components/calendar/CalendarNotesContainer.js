// 3rd Party
import React from 'react';
import { connect } from 'react-redux';

// Component Logic
import { convertTimeToNumber } from '../../selectors/determine-elapsed-time';

// Redux
import determineLifeGoal from '../../selectors/determine-life-goal';
import determineAssignedNote from '../../selectors/determine-assigned-note';
import { determineCalendarNoteOrder, determineGreatestElapsedTime } from '../../selectors/determine-calendar-note-order';

// Other Components
import CalendarNote from './CalendarNote';

class CalendarNotesContainer extends React.Component {
  render (props) {
    let nestedGridCounter = 1;
    let lastGroupEndTime = 0;
    const noteCount = this.props.calendarNotes.length;
    determineCalendarNoteOrder(this.props.calendarNotes);
    // gridRow/gridColumn has plus 1 because currentStartTimeNum and currentEndTimeNum are zero index'd and css grid starts at 1
    return this.props.calendarNotes.map((note, ind) => {
      const goalColor = determineLifeGoal(this.props.lifeGoals, note)[0]
        .goalColor;
      const currentStartTimeNum = convertTimeToNumber(note.currentStartTime);
      let currentEndTimeNum = convertTimeToNumber(note.currentEndTime);
      if (currentEndTimeNum === 0) {
        currentEndTimeNum = 24;
      }
      // Nested Grid Counter to make sure non nested events don't get shrunk
      if (lastGroupEndTime > currentStartTimeNum) {
        nestedGridCounter++;
      } else {
        nestedGridCounter = 1;
      }
      const styleProperties = {
        gridRow: `${1 + currentStartTimeNum} / ${1 + currentEndTimeNum}`,
        gridColumn: `${nestedGridCounter} / ${1 + noteCount}`,
        zIndex: `${3 + ind}`
      };
      // Gives latest end time for nested grid check
      lastGroupEndTime = determineGreatestElapsedTime(
        note.elapsedTime,
        lastGroupEndTime
      );
      return (
        <CalendarNote
          key={note.id}
          onToggleModal={this.props.onToggleModal}
          assignedNote={note}
          currentDate={this.props.currentDate}
          classNameObj={`calendar__item-event ${goalColor}`}
          styleObj={styleProperties}
        />
      );
    })
  }
}

const mapStateToProps = (state, ownProps) => ({
  calendarNotes: determineAssignedNote(state.notes, ownProps.currentDate),
  lifeGoals: state.lifeGoals
  // currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps)(CalendarNotesContainer);
