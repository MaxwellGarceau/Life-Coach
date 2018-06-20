import React from 'react';

// Other Components
// import DailyViewModal from './DailyViewModal';

class CalendarNote extends React.Component {
  render (props) {
    return (
      <div onClick={() => this.props.onToggleModal(this.props.assignedNote)} className={this.props.classNameObj} style={this.props.styleObj}>
        <div>
          {this.props.assignedNote.noteDescription}
        </div>
      </div>
    );
  }
}

export default CalendarNote;
