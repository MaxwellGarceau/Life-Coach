import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'font-awesome/css/font-awesome.css';
import MonthView from './MonthView';
import { startSetYear } from '../../actions/calendar';
import CalendarViewSelector from './CalendarViewSelector';

export class YearView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentYear: this.props.currentYear || 0
    }
  }
  handleIncreaseYear = () => {
    this.setState((prevState) => ({ currentYear: prevState.currentYear += 1 }), () => {
      this.props.startSetYear(this.state.currentYear);
    });
  };
  handleDecreaseYear = () => {
    this.setState((prevState) => ({ currentYear: prevState.currentYear -= 1 }), () => {
      this.props.startSetYear(this.state.currentYear);
    });
  };
  // handleSetYear = () => {
  //   return moment().add(this.props.currentYear, 'years').year();
  // }
  render (props) {
    const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
      <section>
        <div>
          <h1>{this.props.currentYear}</h1>
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
  startSetYear: (currentYear) => dispatch(startSetYear(currentYear))
});

const mapStateToProps = (state, ownProps) => ({
  currentYear: state.calendar.currentYear
});

export default connect(mapStateToProps, mapDispatchToProps)(YearView);
