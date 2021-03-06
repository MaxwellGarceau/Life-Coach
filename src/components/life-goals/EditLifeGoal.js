import React from 'react';
import { connect } from 'react-redux';
import { startEditLifeGoal, startRemoveLifeGoal } from '../../actions/life-goals';
import LifeGoalForm from './LifeGoalForm';

class EditLifeGoal extends React.Component {
  onSubmit = (lifeGoal) => {
    this.props.startEditLifeGoal(this.props.goal.id, lifeGoal);
    this.props.history.push("/goals");
  }
  handleOnRemove = () => {
    let confirmRemoveGoal = confirm('Warning: Your calendar events assigned to this life goal will also be deleted. If you wish to change your life goal simply input your new life goal and click accept. Are you sure you wish to continue?');
    if (!confirmRemoveGoal) {
      return;
    }
    this.props.startRemoveLifeGoal({ id: this.props.goal.id });
    this.props.history.push("/goals");
  }
  render (props) {
    return (
      <section>
        <h1>Edit Life Goal</h1>
        <div>
        <LifeGoalForm
          goal={this.props.goal}
          onSubmit={this.onSubmit}
        />
        <button className="button button--secondary" onClick={this.handleOnRemove}>Remove Goal</button>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditLifeGoal: (id, lifeGoal) => dispatch(startEditLifeGoal(id, lifeGoal)),
  startRemoveLifeGoal: (id) => dispatch(startRemoveLifeGoal(id)),
})

const mapStateToProps = (state, props) => ({
  goal: state.lifeGoals.find((goal) => goal.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLifeGoal);
