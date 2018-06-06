import React from 'react';
import { connect } from 'react-redux';
import NewLifeGoal from './NewLifeGoal';

class EditLifeGoal extends React.Component {
  render (props) {
    return (
      <div>
        <NewLifeGoal history={this.props.history} goalTitle={this.props.goal.goalTitle} goalDescription={this.props.goal.goalDescription} goalColor={this.props.goal.goalColor} goalId={this.props.goal.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  goal: state.lifeGoals.find(goal => goal.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditLifeGoal);
