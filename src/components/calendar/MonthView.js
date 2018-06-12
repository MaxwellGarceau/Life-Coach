import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import MonthDays from './MonthDays';

export class MonthView extends React.Component {
  constructor (props) {
    super(props);
  }
  // handleIncreaseYear = () => {
  //   this.setState((prevState) => { setYear: prevState.currentYear.add(1, 'years') });
  // };
  // handleDecreaseYear = () => {
  //   this.setState((prevState) => { setYear: prevState.currentYear.subtract(1, 'years') });
  // };
  render (props) {
    // console.log(this.props.currentYear);
    const year = this.props.currentYear;
    console.log('year props', this.props.currentYear);
    const startWeek = year
      .month((this.props.month || ''))
      .startOf('month')
      .week();
    // console.log(year.month(this.props.month));
    let endWeek = year
      .month((this.props.month || ''))
      .endOf('month')
      .week();

    // const startWeek = moment()
    //   .setYear(200, 'years')
    //   .month((this.props.month || ''))
    //   .startOf('month')
    //   .week();
    // let endWeek = moment()
    //   .month((this.props.month || ''))
    //   .endOf('month')
    //   .week();

    if (endWeek === 1) { endWeek = 53; }

    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push({
        week: week,
        days: Array(7)
          .fill(0)
          .map((n, i) =>
            year
              .week(week)
              .startOf('week')
              .clone()
              .add(n + i, 'day')
              .format('MM-DD-YYYY')
          )
      });
    }
    // console.log(calendar.days);
    return (
      <section>
        <h1>{this.props.month}</h1>
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

const mapStateToProps = (state, ownProps) => ({
  // currentYear: state.
});

export default connect(mapStateToProps)(MonthView);
