import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import MonthView from './MonthView';

export class YearView extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
      <section>
        <h1>Year View (Need to Finish)</h1>
        {monthsArr.map((month) => {
          return <MonthView month={month}/>;
        })}
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(YearView);
