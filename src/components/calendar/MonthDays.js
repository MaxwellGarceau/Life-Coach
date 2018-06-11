import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export class MonthView extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div>
        {this.props.date}
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleCreateActivity: expense => dispatch(temp)
// });

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps)(MonthView);
