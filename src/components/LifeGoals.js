import React from 'react';
import { Link } from 'react-router-dom';
import LifeGoalsList from './LifeGoalsList';
import NewLifeGoal from './NewLifeGoal';

class LifeGoals extends React.Component {
  // constructor (props) {
  //   super(props);
  // }
  render (props) {
    return (
      <section>
        <h1>Life Goals</h1>
        <Link to="/create-goal">
          <button>Create New Goal</button>
        </Link>
        <LifeGoalsList />
      </section>
    );
  }
}

export default LifeGoals;
