import React from 'react';
import { connect } from 'react-redux';
import { startAddLifeGoal } from '../../actions/life-goals';
import LifeGoalForm from './LifeGoalForm';

class CreateLifeGoal extends React.Component {
  constructor (props) {
    super(props);
  }
  onSubmit = (lifeGoal) => {
    this.props.startAddLifeGoal(lifeGoal);
    this.props.history.push("/goals");
  }
  render (props) {
    return (
      <section>
        <h1>New Life Goal</h1>
        <div>
          <LifeGoalForm onSubmit={this.onSubmit} history={this.props.history}/>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddLifeGoal: (lifeGoal) => dispatch(startAddLifeGoal(lifeGoal))
})

export default connect(undefined, mapDispatchToProps)(CreateLifeGoal);
