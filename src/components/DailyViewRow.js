import React from 'react';
import { connect } from 'react-redux';
import DailyViewModal from './DailyViewModal';
let temp = false;

export class DailyViewRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: false
    };
  }

  handleCreateActivity = (e) => {
    this.setState(() => ({ temp: true }));
    console.log(e.target.value);
    const startTime = e.target;
    console.log(e.target);
    // Working on targeting div with the class name "daily-view__description" so I can inject text into it from the modal
  }
  render (props) {
    return (
      <div className="calendar__row" onClick={this.handleCreateActivity}>
      <div className="daily-view__description"></div>
        {this.props.time}
        <div>{this.state.temp && <DailyViewModal />}</div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

// const mapStateToProps = (state, props) => ({
//   expense: state.expenses.find(expense => expense.id === props.match.params.id)
// });

// export default connect(undefined, mapDispatchToProps)(DailyViewRow);
