import React from 'react';
import { connect } from 'react-redux';

class ModalGoalSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultGoalId: 'errands'
    }
  };
  handleGoalId = (e) => {
    const goalId = e.target.value;
    this.props.handleGoalId(goalId);
  };
  render (props) {
    return (
      <div>
        <span>Select Goal</span>
        <div>
          <select defaultValue={this.state.defaultGoalId} onChange={this.handleGoalId}>
            <option value="errands">Errands</option>
            {this.props.lifeGoals.length > 0 && this.props.lifeGoals.map(goal => {
              return <option key={goal.id} value={goal.id}>{goal.goalTitle}</option>;
            })
            }
          </select>
        </div>
      </div>
    );    
  }
}

const mapStateToProps = (state) => ({
  lifeGoals: state.lifeGoals
})

export default connect(mapStateToProps)(ModalGoalSelection);
