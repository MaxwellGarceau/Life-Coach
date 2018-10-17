import React from 'react';
import { connect } from 'react-redux';
import MonthDays from './MonthDays';
import CalendarViewSelector from './CalendarViewSelector';

class MonthWeek extends React.Component {
  // constructor (props) {
  //   super(props);

  // }
  render (props) {
    return (
      <section>
        <h4>WEEK BREAK (Month Week)</h4>
        {this.props.weekArr.days.map((date) => {
          return <MonthDays key={date} date={date} />;
        })}
      </section>
    );
  }
}

export default MonthWeek;
