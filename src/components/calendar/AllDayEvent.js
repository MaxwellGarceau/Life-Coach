// 3rd Party
import React from 'react';
import { connect } from 'react-redux';

// Component Logic
import determineAssignedAllDayNotes from '../../selectors/determine-assigned-all-day-notes';

class AllDayEvent extends React.Component {
  render (props) {
    console.log('assigned all day notes', this.props.assignedCalendarNotes);
    return (
      <div>
      All Day Event: {this.props.currentDate}
      <br />
      Assigned Notes: {this.props.assignedCalendarNotes.length > 0 ? this.props.assignedCalendarNotes[0].noteDescription : 'False'}
        {/* <div
          className={`daily-view-modal__background${modalBgVisiblityClasses}`}
        >
          {this.state.isModalVisible && (
            <DailyViewModal
              onToggleModal={this.onToggleModal}
              defaultStartTime={this.props.defaultStartTime}
              // assignedNote={primeAssignedNote}
              currentDate={this.props.currentDate}
            />
          )}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  assignedCalendarNotes: determineAssignedAllDayNotes(state.notes, ownProps.currentDate)
});

export default connect(mapStateToProps)(AllDayEvent);
