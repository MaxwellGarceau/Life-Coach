// 3rd Party imports
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'font-awesome/css/font-awesome.css';

// Component/Action Imports
import MonthView from './MonthView';
import { startSetDate } from '../../actions/calendar';

// Component Logic
import { formatSetDate } from '../../component-logic/calendar/generate-calendar-dates';

export class YearView extends React.Component {
  constructor(props) {
    super(props);
  }
  handleIncreaseYear = () => {
    const dateUpdate = formatSetDate(this.props.currentDate, 'YYYY-MM-DD', 1, 'years');
    this.props.startSetDate(dateUpdate);
  };
  handleDecreaseYear = () => {
    const dateUpdate = formatSetDate(this.props.currentDate, 'YYYY-MM-DD', -1, 'years');
    this.props.startSetDate(dateUpdate);
  };
  render (props) {
    console.log('previous logic', moment().year(2018));
    console.log('new logic', moment(this.props.currentDate));
    const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const yearFormat = formatSetDate(this.props.currentDate, 'YYYY');
    return (
      <section>
        <div>
          <h1>{yearFormat}</h1>
          <div>
            <span onClick={this.handleDecreaseYear}><i className="fa fa-arrow-circle-left" /></span>
            <span onClick={this.handleIncreaseYear}><i className="fa fa-arrow-circle-right" /></span>
          </div>
        </div>
        {monthsArr.map((month) => {
          return <MonthView key={month} yearViewAssignedMonth={month} />;
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(YearView);
