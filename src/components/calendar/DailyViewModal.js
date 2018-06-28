// 3rd Party
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Redux
import { startAddNote, startRemoveNote, startEditNote } from '../../actions/notes';

// Other Components
import DailyViewTimeSelector from './DailyViewTimeSelector';
import ModalGoalSelection from './ModalGoalSelection';
import ModalDateSelection from './ModalDateSelection';

// Componenet Logic
import determineElapsedTime, { defaultEndTime } from '../../selectors/determine-elapsed-time';
import { determineElapsedDates } from '../../selectors/determine-elapsed-dates';
import { formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

export class DailyViewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteDescription: props.assignedNote ? props.assignedNote.noteDescription : '',
      currentStartTime: props.assignedNote ? props.assignedNote.currentStartTime : this.props.defaultStartTime,
      currentEndTime: props.assignedNote ? props.assignedNote.currentEndTime : defaultEndTime(this.props.defaultStartTime),
      assignedNoteId: props.assignedNote ? props.assignedNote.id : undefined,
      goalId: props.assignedNote ? props.assignedNote.goalId : 'errands-123',
      startDate: moment(this.props.currentDate),
      endDate: moment(this.props.currentDate)
    };
  }
  onNoteDescriptionChange = (e) => {
    const noteDescription = e.target.value;
    this.setState(() => ({ noteDescription }));
  };
  onSubmit = (e) => {
      e.preventDefault();
      // const elapsedDates = determineElapsedDates(this.state.noteAssignedStartDate, this.state.noteAssignedEndDate);
      // console.log(elapsedDates);
    // Maybe also send an object with an array of times in between to redux
    const note = {
      id: this.state.assignedNoteId,
      noteDescription: this.state.noteDescription,
      currentStartTime: this.state.currentStartTime,
      currentEndTime: this.state.currentEndTime,
      elapsedTime: determineElapsedTime(this.state.currentStartTime, this.state.currentEndTime),
      goalId: this.state.goalId,
      currentDate: this.props.currentDate,
      startDate: formatSetDate(this.state.startDate),
      endDate: formatSetDate(this.state.endDate),
      elapsedDates: determineElapsedDates(this.state.startDate, this.state.endDate)
    };
    note.id ? this.props.startEditNote(note) : this.props.startAddNote(note);
    this.onToggleModal();
  };
  onToggleModal = () => {
    this.props.onToggleModal();
  };
  onClearNoteDescription = () => {
    this.props.startRemoveNote(this.state.assignedNoteId)
    this.onToggleModal();
  };
  handleStartTimeOnChange = (currentStartTime) => {
    this.setState({ currentStartTime });
  };
  handleEndTimeOnChange = (currentEndTime) => {
    this.setState({ currentEndTime });
  };
  handleGoalId = (goalId) => {
    this.setState({ goalId });
  };
  handleDateSelection = (startDate, endDate) => {
    // startDate = formatSetDate(startDate);
    // endDate = endDate === null ? endDate : formatSetDate(endDate);
    this.setState({ startDate, endDate });
  }
  render () {
    return (
      <div className="daily-view-modal">
        <form id="daily-view-form" onSubmit={this.onSubmit}>
          <h6 className="daily-view-modal__title">Planner Modal</h6>
          <textarea
            className="daily-view-modal__body"
            onChange={this.onNoteDescriptionChange}
            value={this.state.noteDescription}
            placeholder="Activity Description"
          />
          <DailyViewTimeSelector
            defaultStartTime={this.props.assignedNote ? this.props.assignedNote.currentStartTime : this.props.defaultStartTime}
            defaultEndTime={this.props.assignedNote ? this.props.assignedNote.currentEndTime : ''}
            handleStartTimeOnChange={this.handleStartTimeOnChange}
            handleEndTimeOnChange={this.handleEndTimeOnChange}
          />
          <ModalDateSelection
            currentDate={this.props.currentDate}
            handleDateSelection={this.handleDateSelection}
           />
          <ModalGoalSelection 
            handleGoalId={this.handleGoalId}
            assignedNote={this.props.assignedNote}
          />
          <div>
            <button className="button daily-view-modal__button" type="submit">
              Save
            </button>
            <button
              className="button daily-view-modal__button"
              type="button"
              onClick={this.onClearNoteDescription}
            >
              Clear Note
            </button>
            <button
              className="button daily-view-modal__button"
              type="button"
              onClick={this.onToggleModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddNote: (note) => dispatch(startAddNote(note)),
  startRemoveNote: (noteId) => dispatch(startRemoveNote(noteId)),
  startEditNote: (editedNote) => dispatch(startEditNote(editedNote))
});

const mapStateToProps = (state, ownProps) => ({
  // Using props that are passed down instead of redux for currentDate
  // currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyViewModal);
