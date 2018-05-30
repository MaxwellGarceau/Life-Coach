import React from 'react';
import { connect } from 'react-redux';

// JSX for selector
// let timeOptions = '';
// for (let i = 0; i < 12; i++) {
//   timeOptions += <option>{i + 1}am</option>;
// };
// for (let i = 0; i < 12; i++) {
//   timeOptions += <option>{i + 1}pm</option>;
// };
// timeOptions = (
//   <select>{timeOptions}</select>
// );
// console.log(timeOptions);

const DailyViewTimeSelector = () => {
  return (
    <div>
      <select>
        <option>12am</option>
        <option>1am</option>
        <option>2am</option>
        <option>3am</option>
        <option>4am</option>
        <option>5am</option>
        <option>6am</option>
        <option>7am</option>
        <option>8am</option>
        <option>9am</option>
        <option>10am</option>
        <option>11am</option>
        <option>12pm</option>
        <option>1pm</option>
        <option>2pm</option>
        <option>3pm</option>
        <option>4pm</option>
        <option>5pm</option>
        <option>6pm</option>
        <option>7pm</option>
        <option>8pm</option>
        <option>9pm</option>
        <option>10pm</option>
        <option>11pm</option>
      </select>
      <span>-</span>
      <select>
        <option>12am</option>
        <option>1am</option>
        <option>2am</option>
        <option>3am</option>
        <option>4am</option>
        <option>5am</option>
        <option>6am</option>
        <option>7am</option>
        <option>8am</option>
        <option>9am</option>
        <option>10am</option>
        <option>11am</option>
        <option>12pm</option>
        <option>1pm</option>
        <option>2pm</option>
        <option>3pm</option>
        <option>4pm</option>
        <option>5pm</option>
        <option>6pm</option>
        <option>7pm</option>
        <option>8pm</option>
        <option>9pm</option>
        <option>10pm</option>
        <option>11pm</option>
      </select>
    </div>
  )
};

export default DailyViewTimeSelector;
