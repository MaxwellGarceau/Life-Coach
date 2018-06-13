import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getMonth } from '../../component-logic/calendar/generate-calendar-dates';
import { startSetYear } from '../../actions/calendar';
import MonthDays from './MonthDays';
import WeekView from './WeekView';
import CalendarViewSelector from './CalendarViewSelector';

export class MonthView extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentMonth: 0,
      monthViewAddRemoveYear: 0
    }
  }
  handleIncreaseMonth = () => {
    this.setState((prevState) => ({ currentMonth: prevState.currentMonth += 1 }), () => {
      if ('January' === getMonth(this.state.currentMonth).clone().format('MMMM')) {
        this.handleIncreaseYear();
      }
    });
  };
  handleDecreaseMonth = () => {
    this.setState((prevState) => ({ currentMonth: prevState.currentMonth -= 1 }), () => {
      if ('December' === getMonth(this.state.currentMonth).clone().format('MMMM')) {
        this.handleDecreaseYear();
      }
    });
  };  
  handleIncreaseYear = () => {
      const yearUpdateIncrease = (!this.props.currentYear ? 0 : this.props.currentYear) + 1;
      this.props.startSetYear(yearUpdateIncrease);
  };
  handleDecreaseYear = () => {
      const yearUpdateDecrease = (!this.props.currentYear ? 0 : this.props.currentYear) - 1;
      this.props.startSetYear(yearUpdateDecrease);
  };
  render (props) {
    // Put logic before return in generate-calendar-dates file
    const year = moment().add(this.props.currentYear, 'years');
    const month = moment().add(this.state.currentMonth, 'months');

    const startWeek = year.clone()
      .month((this.props.month || ''))
      .add(this.state.currentMonth, 'months')
      .startOf('month')
      .week();

    let endWeek = year.clone()
      .month((this.props.month || ''))
      .add(this.state.currentMonth, 'months')
      .endOf('month')
      .week();

    if (endWeek === 1) { endWeek = 53; }

    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push({
        week: week,
        days: Array(7)
          .fill(0)
          .map((n, i) =>
            year.clone()
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

        <h1>{this.props.month || month.clone().format('MMMM')}, {year.format('YYYY')}</h1>
        {!this.props.month &&
        <div>
          <span onClick={this.handleDecreaseMonth}><i className="fa fa-arrow-circle-left" /></span>
          <span onClick={this.handleIncreaseMonth}><i className="fa fa-arrow-circle-right" /></span>
        </div>
        }
        <div>
          {calendar.map((weekArr) => {
            return (
              <WeekView key={weekArr.week} weekArr={weekArr} />);
          })}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetYear: (currentYear) => dispatch(startSetYear(currentYear))
});

const mapStateToProps = (state, ownProps) => ({
  currentYear: state.calendar.currentYear
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthView);
