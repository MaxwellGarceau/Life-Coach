import React from 'react';
import { connect } from 'react-redux';
import { startAddNote } from '../actions/notes';
import DailyViewTimeSelector from './DailyViewTimeSelector';
import ModalGoalSelection from './ModalGoalSelection';
import determineElapsedTime, { defaultEndTime } from '../selectors/determine-elapsed-time';

export class DailyViewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteDescription: props.activity ? props.activity.noteDescription : '',
      currentStartTime: this.props.defaultStartTime,
      currentEndTime: defaultEndTime(this.props.defaultStartTime)
    };
  }
  onNoteDescriptionChange = (e) => {
    const noteDescription = e.target.value;
    this.setState(() => ({ noteDescription }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    // Maybe also send an object with an array of times in between to redux
    const note = {
      noteDescription: this.state.noteDescription,
      currentStartTime: this.state.currentStartTime,
      currentEndTime: this.state.currentEndTime,
      elapsedTime: determineElapsedTime(this.state.currentStartTime, this.state.currentEndTime),
      goalId: this.state.goalId
    };
    this.props.startAddNote(note);
    // Send note Description to redux instead
    this.props.setNoteDescription(this.state.noteDescription);
    this.onToggleModal();
  };
  onToggleModal = () => {
    this.props.onToggleModal();
  };
  onClearNoteDescription = () => {
    this.props.setNoteDescription('');
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
  }
  render() {
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
            defaultStartTime={this.props.defaultStartTime}
            handleStartTimeOnChange={this.handleStartTimeOnChange}
            handleEndTimeOnChange={this.handleEndTimeOnChange}
          />
          <ModalGoalSelection 
            handleGoalId={this.handleGoalId}
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
              Clear Contents
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
  startAddNote: (note) => dispatch(startAddNote(note))
})

export default connect(undefined, mapDispatchToProps)(DailyViewModal);
