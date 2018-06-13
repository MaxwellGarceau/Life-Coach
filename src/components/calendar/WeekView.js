import React from 'react';
import { connect } from 'react-redux';
import MonthDays from './MonthDays';
import CalendarViewSelector from './CalendarViewSelector';

class WeekView extends React.Component {
  // constructor (props) {
  //   super(props);

  // }
  render (props) {
    return (
      <section>
        <h4>WEEK BREAK</h4>
        {this.props.weekArr.days.map((date) => {
          return <MonthDays key={date} date={date} />;
        })}
      </section>
    );
  }
}

export default WeekView;
