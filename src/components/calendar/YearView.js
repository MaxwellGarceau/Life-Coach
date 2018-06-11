import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import MonthView from './MonthView';

export class YearView extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <section>
        <h1>Year View (Need to Finish)</h1>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(YearView);
