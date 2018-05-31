import React from 'react';
import { connect } from 'react-redux';
import DailyViewTimeSelector from './DailyViewTimeSelector';

export class DailyViewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteDescription: props.activity ? props.activity.noteDescription : ''
    };
  }
  onNoteDescriptionChange = (e) => {
    const noteDescription = e.target.value;
    this.setState(() => ({ noteDescription }));
  };
  onSubmit = (e) => {
    e.preventDefault();
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
  render() {
    return (
      <div className="daily-view-modal">
        <form onSubmit={this.onSubmit}>
          <h6>Planner Modal</h6>
          <textarea
            onChange={this.onNoteDescriptionChange}
            value={this.state.noteDescription}
            placeholder='Activity Description'
          />
          <DailyViewTimeSelector />
          <div>
            <button className="button" type="submit">Save</button>
            <button className="button" type="button" onClick={this.onClearNoteDescription}>Clear Contents</button>
            <button className="button" type="button" onClick={this.onToggleModal}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default DailyViewModal;
