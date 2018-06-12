import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'font-awesome/css/font-awesome.css';
import MonthView from './MonthView';
import { startSetYear } from '../../actions/calendar';

export class YearView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentYear: moment()
    }
  }
  handleIncreaseYear = () => {
    this.setState((prevState) => ({ currentYear: prevState.currentYear.add(1, 'years') }), () => {
      this.props.startSetYear(this.state.currentYear);
    });
  };
  handleDecreaseYear = () => {
    this.setState((prevState) => ({ currentYear: prevState.currentYear.subtract(1, 'years') }));
  };
  render (props) {
    const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
      <section>
        <div>
          <h1>Year Selector</h1>
          <div>
            <span onClick={this.handleDecreaseYear}><i className="fa fa-arrow-circle-left" /></span>
            <span onClick={this.handleIncreaseYear}><i className="fa fa-arrow-circle-right" /></span>
          </div>
        </div>
        {monthsArr.map((month) => {
          return <MonthView key={month} month={month} currentYear={this.state.currentYear} />;
        })}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetYear: (currentYear) => dispatch(startSetYear(currentYear))
});

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(YearView);
