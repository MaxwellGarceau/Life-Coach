// Need to save note to redux so I can edit it and access it later
import React from 'react';
import { connect } from 'react-redux';
import DailyViewModal from './DailyViewModal';
import determineLifeGoal from '../../selectors/determine-life-goal';
import determineAssignedNote from '../../selectors/determine-assigned-note';
import assignNoteToRow from '../../selectors/assign-note-to-row';

// Component Logic
import { formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

export class DailyViewRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    };
  }
  onToggleModal = () => {
    this.state.isModalVisible == false
      ? this.setState(() => ({ isModalVisible: true }))
      : this.setState(() => ({ isModalVisible: false }));
  };
  render(props) {
    let modalBgVisiblityClasses = this.state.isModalVisible
      ? ' visible opacity-full'
      : '';
// Logic for determining assigned note and life goal match
    let currentLifeGoal = determineLifeGoal(this.props.lifeGoals, this.props.assignedNote)[0];
    const primeAssignedNote = this.props.assignedNote[0];
    const isDescriptionRow = primeAssignedNote && primeAssignedNote.currentStartTime === this.props.defaultStartTime;
    const noteCount = this.props.calendarNotes.length;
    return (
      <section
        className="calendar__row--bg-color"
        style={{gridRow: `${this.props.rowNum}`, gridColumn: `1 / ${1 + noteCount}`}}
      >
        {/* Individual Calendar Row */}
        <div className="calendar__row-content" onClick={this.onToggleModal}>
          <div className="daily-calendar-view__start-time">{this.props.defaultStartTime}</div>
        </div>
        {/* Modal pop up for inputting activity */}
        <div
          className={`daily-view-modal__background${modalBgVisiblityClasses}`}
        >
          {this.state.isModalVisible && (
            <DailyViewModal
              onToggleModal={this.onToggleModal}
              defaultStartTime={this.props.defaultStartTime}
              assignedNote={primeAssignedNote}
              currentDate={this.props.currentDate}
            />
          )}
        </div>
        {/*<div id={`note-display-${this.props.currentDate}-end-${this.props.defaultStartTime}`}></div>*/}
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({
  notes: state.notes,
  // Using ownProps for date selection. Maybe switch to redux later
  assignedNote: assignNoteToRow(state.notes, ownProps.defaultStartTime, ownProps.currentDate),
  calendarNotes: determineAssignedNote(state.notes, ownProps.currentDate),
  lifeGoals: state.lifeGoals
});

export default connect(mapStateToProps)(DailyViewRow);
