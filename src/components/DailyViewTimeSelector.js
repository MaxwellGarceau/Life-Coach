import React from 'react';
import { connect } from 'react-redux';
import { defaultEndTime, endTimeStartTimeDifference } from '../selectors/determine-elapsed-time';

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
          <option value="12am">12am</option>
          <option value="1am">1am</option>
          <option value="2am">2am</option>
          <option value="3am">3am</option>
          <option value="4am">4am</option>
          <option value="5am">5am</option>
          <option value="6am">6am</option>
          <option value="7am">7am</option>
          <option value="8am">8am</option>
          <option value="9am">9am</option>
          <option value="10am">10am</option>
          <option value="11am">11am</option>
          <option value="12pm">12pm</option>
          <option value="1pm">1pm</option>
          <option value="2pm">2pm</option>
          <option value="3pm">3pm</option>
          <option value="4pm">4pm</option>
          <option value="5pm">5pm</option>
          <option value="6pm">6pm</option>
          <option value="7pm">7pm</option>
          <option value="8pm">8pm</option>
          <option value="9pm">9pm</option>
          <option value="10pm">10pm</option>
          <option value="11pm">11pm</option>
        </select>
        <span>&nbsp;-&nbsp;</span>
        <select
          onChange={this.handleEndTimeOnChange}
          value={this.state.currentEndTime}
        >
          <option value="12am">12am</option>
          <option value="1am">1am</option>
          <option value="2am">2am</option>
          <option value="3am">3am</option>
          <option value="4am">4am</option>
          <option value="5am">5am</option>
          <option value="6am">6am</option>
          <option value="7am">7am</option>
          <option value="8am">8am</option>
          <option value="9am">9am</option>
          <option value="10am">10am</option>
          <option value="11am">11am</option>
          <option value="12pm">12pm</option>
          <option value="1pm">1pm</option>
          <option value="2pm">2pm</option>
          <option value="3pm">3pm</option>
          <option value="4pm">4pm</option>
          <option value="5pm">5pm</option>
          <option value="6pm">6pm</option>
          <option value="7pm">7pm</option>
          <option value="8pm">8pm</option>
          <option value="9pm">9pm</option>
          <option value="10pm">10pm</option>
          <option value="11pm">11pm</option>
        </select>
      </div>
    );
  }
}

export default DailyViewTimeSelector;
