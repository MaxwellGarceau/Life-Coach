// 3rd Party Imports
import React from 'react';
import { history } from '../../routers/AppRouter';

// Redux
import { connect } from 'react-redux';
import { startSetDate } from '../../actions/calendar';

// Component Imports
import MonthWeek from './MonthWeek';
import MonthSelectorArrows from './MonthSelectorArrows';

// Component Logic
import { generateCalendarDates, formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

export class MonthView extends React.Component {
  constructor (props) {
    super(props);
  }
  handleGenerateCalendarDates = () => {
    return generateCalendarDates(this.props.currentDate, this.props.yearViewAssignedMonth);
  };
  handleGoToMonth = () => {
    if (this.props.yearViewAssignedMonth) {
      const inputDate = `${this.props.yearViewAssignedMonth}-${formatSetDate(this.props.currentDate, 'YYYY')}`;
      const dateUpdate = formatSetDate(inputDate, 'YYYY-MM-DD', 0, '', 'MMMM-YYYY');
      this.props.startSetDate(dateUpdate);
      history.push('/calendar/month');
    }
  }
  render (props) {
    const monthFormat = formatSetDate(this.props.currentDate, 'MMMM');
    const yearFormat = formatSetDate(this.props.currentDate, 'YYYY');
    return (
      <section>
        <h1 onClick={this.handleGoToMonth}>{this.props.yearViewAssignedMonth || monthFormat}, {yearFormat}</h1>
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
  startSetDate: (currentDate) => dispatch(startSetDate(currentDate))
});

const mapStateToProps = (state, ownProps) => ({
  currentDate: state.calendar.currentDate
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthView);
