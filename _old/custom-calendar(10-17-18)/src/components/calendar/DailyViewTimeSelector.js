import React from 'react';
import { connect } from 'react-redux';
import { defaultEndTime, endTimeStartTimeDifference } from '../../selectors/determine-elapsed-time';

// Component Logic
import { timeArr } from '../../component-logic/calendar/generate-calendar-dates';

export class DailyViewTimeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStartTime: props.defaultStartTime,
      currentEndTime: props.defaultEndTime ? props.defaultEndTime : defaultEndTime(this.props.defaultStartTime)
    };
  };
  handleStartTimeOnChange = (e) => {
    const currentStartTime = e.target.value;
    const timeDifference = endTimeStartTimeDifference(this.state.currentStartTime, this.state.currentEndTime);
    this.setState({ currentStartTime }, (prev) => {
      this.handleEndTimeSetState(defaultEndTime(currentStartTime, timeDifference));
    });
    this.props.handleStartTimeOnChange(currentStartTime);
    
  };
  handleEndTimeOnChange = (e) => {
    const currentEndTime = e.target.value;
    this.handleEndTimeSetState(currentEndTime);
  };
  handleEndTimeSetState = (currentEndTime) => {
    this.setState({ currentEndTime });
    this.props.handleEndTimeOnChange(currentEndTime);    
  };
  render(props) {
    return (
      <div className="daily-view-modal__time-selector">
        <select
          onChange={this.handleStartTimeOnChange}
          value={this.state.currentStartTime}
        >
        {timeArr.map((timeStart) => {
          return <option key={`${timeStart}startTime`} value={timeStart}>{timeStart}</option>;
        })}
        </select>
        <span>&nbsp;-&nbsp;</span>
        <select
          onChange={this.handleEndTimeOnChange}
          value={this.state.currentEndTime}
        >
        {timeArr.map((timeEnd) => {
          return <option key={`${timeEnd}endTime`} value={timeEnd}>{timeEnd}</option>;
        })}
        </select>
      </div>
    );
  }
}

export default DailyViewTimeSelector;
