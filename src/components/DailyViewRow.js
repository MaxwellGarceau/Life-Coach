// Need to save note to redux so I can edit it and access it later
import React from 'react';
import { connect } from 'react-redux';
import DailyViewModal from './DailyViewModal';
import determineBackgroundColor from '../selectors/determine-background-color';

let temp = false;

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
  setNoteDescription = (noteDescription) => {
    this.setState(() => ({ noteDescription }));
  };
  render(props) {
    let backgroundColorCheck = null;

    if (!backgroundColorCheck) {
      for (let i = 0; i < this.props.notes.length; i++) {
        backgroundColorCheck = this.props.notes[i].elapsedTime.filter(
          (time) => time === this.props.defaultStartTime
        );
        backgroundColorCheck = backgroundColorCheck.join();
        if (!!backgroundColorCheck) {
          break;
        }
      }
    }
    let modalBgVisiblityClasses = this.state.isModalVisible
      ? ' visible opacity-full'
      : '';
    return (
      <section
        className={`calendar__row--bg-color${
          backgroundColorCheck == this.props.defaultStartTime
            ? ' activity-bg-color'
            : ''
        }`}
      >
        {/* Individual Calendar Row */}
        <div
          id={this.props.defaultStartTime}
          className="calendar__row"
          onClick={this.onToggleModal}
        >
          <div>{this.props.defaultStartTime}</div>
          <div className="daily-view__description">
            {this.state.noteDescription}
          </div>
        </div>
        {/* Modal pop up for inputting activity */}
        <div
          className={`daily-view-modal__background${modalBgVisiblityClasses}`}
        >
          {this.state.isModalVisible && (
            <DailyViewModal
              setNoteDescription={this.setNoteDescription}
              onToggleModal={this.onToggleModal}
              defaultStartTime={this.props.defaultStartTime}
            />
          )}
        </div>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state) => ({
  // Replace with actual item from redux store later
  test: !!state.notes[0] ? state.notes[0].currentStartTime : '',
  notes: state.notes
});

export default connect(mapStateToProps)(DailyViewRow);
