// Need to save note to redux so I can edit it and access it later
import React from 'react';
import { connect } from 'react-redux';
import DailyViewModal from './DailyViewModal';
import determineLifeGoal from '../../selectors/determine-life-goal';
import determineAssignedNote from '../../selectors/determine-assigned-note';

// Component Logic
import { formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

export class DailyViewRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    };
    // this.noteDisplayStart = React.createRef();
  }
  onToggleModal = () => {
    this.state.isModalVisible == false
      ? this.setState(() => ({ isModalVisible: true }))
      : this.setState(() => ({ isModalVisible: false }));
  };
  // TEST
  // handleRefTest = () => {
  //   const bodyRect = document.body.getBoundingClientRect();
  //   const rowRef = this.refs[`note-display-${this.props.currentDate}-start-${this.props.defaultStartTime}`];
  //   const rowRect = rowRef.getBoundingClientRect();
  //   const offSet = rowRect.top - bodyRect.top;
  //   console.log('distance from top of body', offSet);
  // };
  // TEST END
  render(props) {
    let modalBgVisiblityClasses = this.state.isModalVisible
      ? ' visible opacity-full'
      : '';
// Logic for determining assigned note and life goal match
    let currentLifeGoal = determineLifeGoal(this.props.lifeGoals, this.props.assignedNote)[0];
    const primeAssignedNote = this.props.assignedNote[0];
    const isDescriptionRow = primeAssignedNote && primeAssignedNote.currentStartTime === this.props.defaultStartTime;
    return (
      <section
        className={`calendar__item calendar__row--bg-color ${currentLifeGoal ? currentLifeGoal.goalColor : ''}`}
        style={{gridRow: `${this.props.rowNum}: 24`}}
        // ref={`note-display-${this.props.currentDate}-start-${this.props.defaultStartTime}`}
        // onClick={this.handleRefTest}
      >
        {/* Individual Calendar Row */}
        <div
          id={this.props.defaultStartTime}
          className="calendar__row"
          onClick={this.onToggleModal}
        >
          <div>{this.props.defaultStartTime}</div>
          <div className="daily-view__description">
            {!!isDescriptionRow && primeAssignedNote.noteDescription}
          </div>
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
        <div id={`note-display-${this.props.currentDate}-end-${this.props.defaultStartTime}`}></div>
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
  assignedNote: determineAssignedNote(state.notes, ownProps.defaultStartTime, ownProps.currentDate),
  lifeGoals: state.lifeGoals
});

export default connect(mapStateToProps)(DailyViewRow);
