import React from 'react';

// Redux
import { connect } from 'react-redux';
import determineLifeGoal from '../../selectors/determine-life-goal';

class ModalGoalSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalId: this.props.assignedLifeGoal ? this.props.assignedLifeGoal.id : 'errands'
    }
  };
  handleGoalId = (e) => {
    const goalId = e.target.value;
    this.setState({ goalId }, () => {
      this.props.handleGoalId(goalId);
    });
  };
  render (props) {
    return (
      <div>
        <span>Select Goal</span>
        <div>
          <select value={this.state.goalId} onChange={this.handleGoalId}>
            <option value="errands">Errands</option>
            {this.props.lifeGoals.length > 0 && this.props.lifeGoals.map(goal => {
              return <option key={goal.id} value={goal.id}>{goal.goalTitle}</option>;
            })}
          </select>
        </div>
      </div>
    );    
  }
}

const mapStateToProps = (state, ownProps) => ({
  lifeGoals: state.lifeGoals,
  assignedLifeGoal: determineLifeGoal(state.lifeGoals, [ownProps.assignedNote || 'No assigned note'])[0]
})

export default connect(mapStateToProps)(ModalGoalSelection);
