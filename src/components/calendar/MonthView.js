// 3rd Party Imports
import React from 'react';
import moment from 'moment';
import { history } from '../../routers/AppRouter';

// Redux
import { connect } from 'react-redux';
import { startSetYear, startSetMonth } from '../../actions/calendar';

// Component Imports
import MonthDays from './MonthDays';
import MonthWeek from './MonthWeek';
import CalendarViewSelector from './CalendarViewSelector';
import MonthSelectorArrows from './MonthSelectorArrows';

// Component Logic
import { generateCalendarDates, getMonth, getYear } from '../../component-logic/calendar/generate-calendar-dates';

export class MonthView extends React.Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   currentMonth: 0,
    //   monthAccumulator: this.props.yearViewAssignedMonthAccumulator || 0
    // }
  }
  // handleIncreaseMonth = () => {
  //   this.setState((prevState) => ({ currentMonth: prevState.currentMonth += 1 }), () => {
  //     if ('January' === getMonth(this.state.currentMonth).clone().format('MMMM')) {
  //       this.handleIncreaseYear();
  //     }
  //   });
  // };
  // handleDecreaseMonth = () => {
  //   this.setState((prevState) => ({ currentMonth: prevState.currentMonth -= 1 }), () => {
  //     if ('December' === getMonth(this.state.currentMonth).clone().format('MMMM')) {
  //       this.handleDecreaseYear();
  //     }
  //   });
  // };  
  // handleIncreaseYear = () => {
  //     const yearUpdateIncrease = (!this.props.currentYear ? 0 : this.props.currentYear) + 1;
  //     this.props.startSetYear(yearUpdateIncrease);
  // };
  // handleDecreaseYear = () => {
  //     const yearUpdateDecrease = (!this.props.currentYear ? 0 : this.props.currentYear) - 1;
  //     this.props.startSetYear(yearUpdateDecrease);
  // };
  handleGenerateCalendarDates = () => {
    return generateCalendarDates(this.props.currentYear, this.props.currentMonth, this.props.yearViewAssignedMonth);
  };
  handleGoToMonth = () => {
    if (this.props.yearViewAssignedMonth) {
      this.props.startSetMonth(getMonth(this.props.yearViewAssignedMonth).month());
      history.push('/calendar/month');
    }
  }
  render (props) {
    const month = getMonth(this.props.currentMonth);
    const year = getYear(this.props.currentYear);
// console.log(moment().format('MM-DD-YYYY'));
    // const startWeek = year.clone()
    //   .month((this.props.yearViewAssignedMonth || ''))
    //   .add(this.state.currentMonth, 'months')
    //   .startOf('month')
    //   .week();

    // let endWeek = year.clone()
    //   .month((this.props.yearViewAssignedMonth || ''))
    //   .add(this.state.currentMonth, 'months')
    //   .endOf('month')
    //   .week();

    // if (endWeek === 1) { endWeek = 53; }

    // let calendar = [];
    // for (let week = startWeek; week <= endWeek; week++) {
    //   calendar.push({
    //     week: week,
    //     days: Array(7)
    //       .fill(0)
    //       .map((n, i) =>
    //         year.clone()
    //           .week(week)
    //           .startOf('week')
    //           .clone()
    //           .add(n + i, 'day')
    //           .format('MM-DD-YYYY')
    //       )
    //   });
    // }
    return (
      <section>

        <h1 onClick={this.handleGoToMonth}>{this.props.yearViewAssignedMonth || month.clone().format('MMMM')}, {year.clone().format('YYYY')}</h1>
        {!this.props.yearViewAssignedMonth &&
          <MonthSelectorArrows />
        }        
        <div>
          {this.handleGenerateCalendarDates().map((weekArr) => {
            return (
              <MonthWeek key={weekArr.week} weekArr={weekArr} />);
          })}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetMonth: (currentMonth) => dispatch(startSetMonth(currentMonth)),
  startSetYear: (currentYear) => dispatch(startSetYear(currentYear))
});

const mapStateToProps = (state, ownProps) => ({
  currentYear: state.calendar.currentYear,
  currentMonth: state.calendar.currentMonth
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthView);
