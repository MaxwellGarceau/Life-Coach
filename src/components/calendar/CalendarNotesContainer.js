// 3rd Party
import React from 'react';
import { connect } from 'react-redux';

// Component Logic
import { convertTimeToNumber } from '../../selectors/determine-elapsed-time';

// Redux
import determineLifeGoal from '../../selectors/determine-life-goal';
import determineAssignedNote from '../../selectors/determine-assigned-note';
import determineCalendarNoteOrder from '../../selectors/determine-calendar-note-order';

// Other Components
import CalendarNote from './CalendarNote';
// import DailyViewModal from './DailyViewModal';

class CalendarNotesContainer extends React.Component {
  render (props) {
    let nestedGridCounter = 1;
    let lastGroupEndTime = 0;
    const noteCount = this.props.calendarNotes.length;
    determineCalendarNoteOrder(this.props.calendarNotes);
    console.log(this.props.calendarNotes)
    return (
      <div className="calendar__container-event">
        {/* gridRow/gridColumn has plus 1 because currentStartTimeNum and currentEndTimeNum are zero index'd and css grid starts at 1*/}
        {this.props.calendarNotes.map((note, ind) => {
          const goalColor = determineLifeGoal(this.props.lifeGoals, note)[0].goalColor;
          const currentStartTimeNum = convertTimeToNumber(note.currentStartTime);
          let currentEndTimeNum = convertTimeToNumber(note.currentEndTime);
          if (currentEndTimeNum === 0) {
            currentEndTimeNum = 24;
          }
          if (lastGroupEndTime > currentStartTimeNum) {
            nestedGridCounter++;
          } else {
            nestedGridCounter = 1;
          }
          console.log('nestedGridCounter', nestedGridCounter);
          const styleProperties = {
            // backgroundColor: goalColor, // Currently being assinged as a class. Maybe change later
            gridRow: `${1 + currentStartTimeNum} / ${1 + currentEndTimeNum}`,
            // gridColumn: `${noteCount - ind} / ${1 + noteCount}`,
            // gridColumn: `${1 + ind} / ${1 + noteCount}`,
            gridColumn: `${nestedGridCounter} / ${1 + noteCount}`,
            // zIndex: `${(3 + noteCount) - ind}`
            zIndex: `${3 + ind}`
          };
          let greatestElapsedTimeArr = note.elapsedTime.map((time) => convertTimeToNumber(time));
          greatestElapsedTimeArr.push(lastGroupEndTime);
          lastGroupEndTime = greatestElapsedTimeArr.reduce((a, b) => Math.max(a, b));
          console.log('lastGroupEndTime', lastGroupEndTime);
          // let greatestElapsedTime = greatestElapsedTimeArr.filter((time) => time > lastGroupEndTime);
          // lastGroupEndTime = greatestElapsedTime > lastGroupEndTime ? greatestElapsedTime : lastGroupEndTime;
          return <CalendarNote key={note.id} onToggleModal={this.props.onToggleModal} assignedNote={note} currentDate={this.props.currentDate} classNameObj={`calendar__item-event ${goalColor}`} styleObj={styleProperties} />
        })}
{/*        <div className="calendar__item-event" style={{gridRow: '2 / 5', zIndex: '3', gridColumn: '2 / 5', backgroundColor: 'orange'}}>Event 1</div>
        <div className="calendar__item-event" style={{gridRow: '7 / 10', gridColumn: '2 / 5', zIndex: '8', backgroundColor: 'purple'}}>Event 2</div>
        <div className="calendar__item-event" style={{gridRow: '1 / 18', gridColumn: '1 / 5', zIndex: '2'}}>Event 3</div>
        <div className="calendar__item-event" style={{gridRow: '19 / 24', gridColumn: '1 / 5', zIndex: '19', backgroundColor: 'green'}}>Event 4 </div>
        <div className="calendar__item-event" style={{gridRow: '2 / 5', gridColumn: '3 / 5', zIndex: '3', backgroundColor: 'green'}}>Event 5 ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</div>*/}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  calendarNotes: determineAssignedNote(state.notes, ownProps.currentDate),
  lifeGoals: state.lifeGoals
  // currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps)(CalendarNotesContainer);
