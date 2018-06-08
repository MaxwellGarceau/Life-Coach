import React from 'react';
import { connect } from 'react-redux';
import { startEditLifeGoal, startRemoveLifeGoal } from '../actions/life-goals';
import LifeGoalForm from './LifeGoalForm';

class EditLifeGoal extends React.Component {
  onSubmit = (lifeGoal) => {
    this.props.startEditLifeGoal(this.props.goal.id, lifeGoal);
    this.props.history.push("/life-goals");
  }
  handleOnRemove = () => {
    this.props.startRemoveLifeGoal({ id: this.props.goal.id });
    this.props.history.push("/life-goals");    
  }
  render (props) {
    return (
      <section>
        <h1>Edit Life Goal</h1>
        <div>
        <LifeGoalForm
          history={this.props.history}
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
  startRemoveLifeGoal: (id) => dispatch(startRemoveLifeGoal(id))
})

const mapStateToProps = (state, props) => ({
  goal: state.lifeGoals.find((goal) => goal.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLifeGoal);
