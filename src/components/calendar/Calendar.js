import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
import CalendarViewSelector from './CalendarViewSelector';
import YearView from './YearView';
import MonthView from './MonthView';
import DailyView from '../DailyView';

export class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCalendarView: DailyView,
      selectedCalendarProps: {}
    }

  }

  handleSelectedCalendarView = (selectedCalendarView, selectedCalendarProps = {}) => {
    this.setState({ 
      selectedCalendarView,
      selectedCalendarProps
    });
  }
  render(props) {
    const SelectedCalendarView = this.state.selectedCalendarView;
    return (
      <section>
        <CalendarViewSelector handleSelectedCalendarView={this.handleSelectedCalendarView} />
        {/*<SelectedCalendarView selectedCalendarView={this.state.selectedCalendarView} />*/}
        <SelectedCalendarView {...this.state.selectedCalendarProps} />
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(Calendar);
