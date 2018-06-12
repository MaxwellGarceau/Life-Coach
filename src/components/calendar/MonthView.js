import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import MonthDays from './MonthDays';

export class MonthView extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const startWeek = moment()
      .month((this.props.month || ''))
      .startOf('month')
      .week();
    console.log('moment start week', startWeek);
    const endWeek = moment()
      .month((this.props.month || ''))
      .endOf('month')
      .week();

    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push({
        week: week,
        days: Array(7)
          .fill(0)
          .map((n, i) =>
            moment()
              .week(week)
              .startOf('week')
              .clone()
              .add(n + i, 'day')
              .format('MM-DD-YYYY')
          )
      });
    }
    return (
      <section>
        <h1>Testing Month View</h1>
        <div>
          {calendar.map((weekArr) => {
            return (
              <div key={weekArr.week}>
                {weekArr.days.map((date) => {
                  return <MonthDays key={date} date={date} />;
                })}
              </div>);
          })}
        </div>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(MonthView);
