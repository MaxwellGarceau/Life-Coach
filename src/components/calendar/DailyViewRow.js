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
  render(props) {

// // TEST
// const bodyRect = document.body.getBoundingClientRect();
// console.log ('bodyRect', bodyRect);
// // const firstRow = document.querySelector(`#note-display-${this.props.currentDate}-start-${this.props.defaultStartTime}`);
// console.log(this.noteDisplayStart);
// const firstRow = this.noteDisplayStart.current;
// console.log('firstRow', firstRow);
// // const firstRowRect = firstRow.getBoundingClientRect();
// // console.log('firstRowRect', firstRowRect);
//     // offset   = elemRect.top - bodyRect.top;

// // alert('Element is ' + offset + ' vertical pixels from <body>');
// // TEST END

    let modalBgVisiblityClasses = this.state.isModalVisible
      ? ' visible opacity-full'
      : '';
// Logic for determining assigned note and life goal match
    let currentLifeGoal = determineLifeGoal(this.props.lifeGoals, this.props.assignedNote)[0];
    const primeAssignedNote = this.props.assignedNote[0];
    const isDescriptionRow = primeAssignedNote && primeAssignedNote.currentStartTime === this.props.defaultStartTime;
    return (
      <section
        className={`calendar__row--bg-color ${currentLifeGoal ? currentLifeGoal.goalColor : ''}`}
        id={`note-display-${this.props.currentDate}-start-${this.props.defaultStartTime}`}
        // ref={this.noteDisplayStart}
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
  // Replace with actual item from redux store later
  test: !!state.notes[0] ? state.notes[0].currentStartTime : '',
  notes: state.notes,
  // Using ownProps for date selection. Maybe switch to redux later
  assignedNote: determineAssignedNote(state.notes, ownProps.defaultStartTime, ownProps.currentDate),
  lifeGoals: state.lifeGoals
});

export default connect(mapStateToProps)(DailyViewRow);
