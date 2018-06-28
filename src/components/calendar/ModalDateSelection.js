// 3rd Party
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

class ModalDateSelection extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      calendarFocused: null,
      startDate: moment(this.props.currentDate),
      endDate: moment(this.props.currentDate)
    };
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate }, () => {
      this.props.handleDateSelection(this.state.startDate, this.state.endDate);
    });
    // this.props.setStartDate(startDate);
    // this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render (props) {
    // let startDate = moment(this.props.currentDate);
    // let endDate = moment(this.props.currentDate);
    return (
      <div className="input-group__item">
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          // showClearDates={true}
          // numberOfMonths={1}
          // isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // currentDate: state.currentDate
});

export default connect(mapStateToProps)(ModalDateSelection);
