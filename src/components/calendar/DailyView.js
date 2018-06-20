// 3rd Party Components
import React from 'react';
import { history } from '../../routers/AppRouter';
import { connect } from 'react-redux';

// Redux
import { startSetDate } from '../../actions/calendar';

// Components
import DailyViewRow from './DailyViewRow';
import CalendarViewSelectorArrows from './CalendarViewSelectorArrows';
import CalendarNotesContainer from './CalendarNotesContainer';
import DailyViewModal from './DailyViewModal';

// Component Logic
import { timeArr, formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

export class DailyView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      assignedNote: ''
    };
    // this.noteDisplayStart = React.createRef();
  }
  onToggleModal = (note) => {
    console.log('toggle modal', note);
    this.state.isModalVisible == false
      ? this.setState(() => ({ assignedNote: note, isModalVisible: true }))
      : this.setState(() => ({ assignedNote: false, isModalVisible: false }));
  };
  handleGoToDay = () => {
    if (this.props.weekViewAssignedDate) {
      const dateUpdate = formatSetDate(this.props.weekViewAssignedDate, 'YYYY-MM-DD', 0, '', 'MM-DD-YYYY');
      console.log('dateupdate', dateUpdate);
      this.props.startSetDate(dateUpdate);
      history.push(`/calendar/day/${this.props.weekViewAssignedDate}`);
    }
  }
  render (props) {
    let modalBgVisiblityClasses = this.state.isModalVisible
      ? ' visible opacity-full'
      : '';
    const reduxCurrentDate = this.props.currentDate;
    const weekViewAssignedDate = this.props.weekViewAssignedDate ? formatSetDate(this.props.weekViewAssignedDate, 'YYYY-MM-DD', 0, '', 'MM-DD-YYYY') : false;
    const currentDate = weekViewAssignedDate || reduxCurrentDate;
    const currentDateFormat = formatSetDate(currentDate, 'MM-DD-YYYY');
    return (
      <section>
        {!weekViewAssignedDate &&
          <CalendarViewSelectorArrows dateFormat={'days'}/>
        }
        <h1 onClick={this.handleGoToDay}>{currentDateFormat}</h1>
        <h2>Current date: {currentDateFormat}</h2>
        <div className="calendar calendar__container">
          {timeArr.map((defaultStartTime, ind) => {
            return <DailyViewRow key={defaultStartTime} currentDate={currentDate} defaultStartTime={defaultStartTime} rowNum={ind + 1} />;
          })}
          <CalendarNotesContainer currentDate={this.props.currentDate} onToggleModal={this.onToggleModal} />
        </div>
        <div
          className={`daily-view-modal__background${modalBgVisiblityClasses}`}
        >
        {this.state.isModalVisible && (
          <DailyViewModal
            onToggleModal={this.onToggleModal}
            assignedNote={this.state.assignedNote}
            currentDate={this.props.currentDate}
          />
        )}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetDate: (currentDate) => dispatch(startSetDate(currentDate))
});

const mapStateToProps = (state, ownProps) => ({
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyView);
