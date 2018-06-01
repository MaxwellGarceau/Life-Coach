import React from 'react';
import { connect } from 'react-redux';
import DailyViewTimeSelector from './DailyViewTimeSelector';

export class DailyViewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteDescription: props.activity ? props.activity.noteDescription : '',
      currentStartTime: this.props.defaultStartTime,
      currentEndTime: this.defaultEndTime()
    };
  }
  defaultEndTime = () => {
    let endTime = this.props.defaultStartTime;
    let endTimeNum = endTime.match(/\d+/g);
    endTimeNum = parseInt(endTimeNum, 10) + 2;
    endTime = endTime.replace(/\d+/g, String(endTimeNum));
    switch (endTime) {
      case '13am':
        endTime = '1pm';
        break;
      case '14am':
        endTime = '2pm';
        break;
      case '13pm':
        endTime = '1am';
        break;
      case '14pm':
        endTime = '2am';
        break;
    }
    return endTime;
  };
  onNoteDescriptionChange = (e) => {
    const noteDescription = e.target.value;
    this.setState(() => ({ noteDescription }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    // Send currentStartTime and currentEndTime to redux
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
            defaultEndTime={this.defaultEndTime()}
            handleStartTimeOnChange={this.handleStartTimeOnChange}
            handleEndTimeOnChange={this.handleEndTimeOnChange}
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

export default DailyViewModal;
