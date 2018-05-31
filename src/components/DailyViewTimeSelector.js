import React from 'react';
import { connect } from 'react-redux';

const DailyViewTimeSelector = (props) => {
  // Logic to calculate default end time
  let endTime = props.startTime;
  let endTimeNum = endTime.match(/\d+/g);
  endTimeNum = parseInt(endTimeNum, 10) + 2;
  endTime = endTime.replace(/\d+/g, String(endTimeNum));
  switch (endTime) {
    case '13am':
      endTime = '1pm';
      break;
    case '14am':
      endTime = '2pm';
      break;
    case '13pm':
      endTime = '1am';
      break;
    case '14pm':
      endTime = '2am';
      break;
  }
  return (
    <div className="daily-view-modal__time-selector">
      <select defaultValue={props.startTime}>
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
      <select defaultValue={endTime}>
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
  )
};

export default DailyViewTimeSelector;
