// 3rd Party
import React from 'react';
import { connect } from 'react-redux';

// Other Components
import DailyViewModal from './DailyViewModal';

// Component Logic
import determineAssignedAllDayNotes from '../../selectors/determine-assigned-all-day-notes';
import determineLifeGoal from '../../selectors/determine-life-goal';

class AllDayEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      assignedNote: undefined
    };
  }
  onToggleModal = (e, dayNote) => {
    this.setState({ assignedNote: dayNote }, () => {
      console.log(this.state.assignedNote);
      this.state.isModalVisible == false
        ? this.setState(() => ({ isModalVisible: true }))
        : this.setState(() => ({ isModalVisible: false }));
      });
  };
  render (props) {
    let modalBgVisiblityClasses = this.state.isModalVisible
      ? ' visible opacity-full'
      : '';
    const emptySpaces = [];
    for (let i = 0; i < this.props.totalAllDayNotes - this.props.assignedCalendarNotes.length; i++) {
      emptySpaces.push(<div key={`empty-space-${i}`} className="calendar__all-day-event-empty-space"></div>);
    }
    return (
      <div>
      <div onClick={((e) => this.onToggleModal(e, undefined))}>click for new day event</div>
        {emptySpaces.map((space) => {
          return space;
        })}
        {this.props.assignedCalendarNotes.map((dayNote) => {
          const dayNoteLifeGoal = determineLifeGoal(this.props.lifeGoals, dayNote)[0];
          return( <div onClick={((e) => this.onToggleModal(e, dayNote))} value={dayNote} key={dayNote.id}>
                    <div className={`calendar__all-day-event ${dayNoteLifeGoal.goalColor}`}>{dayNote.noteDescription}</div>
                  </div>);
        })}
        {/* Modal pop up for inputting activity */}
          <div
            className={`daily-view-modal__background${modalBgVisiblityClasses}`}
          >
          {this.state.isModalVisible && (
            <DailyViewModal
              onToggleModal={this.onToggleModal}
              defaultStartTime={'9am'}
              assignedNote={this.state.assignedNote}
              currentDate={this.props.currentDate}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  assignedCalendarNotes: determineAssignedAllDayNotes(state.notes, ownProps.currentDate),
  lifeGoals: state.lifeGoals,
  totalAllDayNotes: determineAssignedAllDayNotes(state.notes).length
});

export default connect(mapStateToProps)(AllDayEvent);
