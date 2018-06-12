import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import YearView from './YearView';

export class MultiYearView extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render (props) {
    return (
      <section>
        <div>
        </div>
        {/* monthsArr.map((month) => {
          return <MonthView key={month} month={month} />;
        }) */}
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(MultiYearView);
