import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import LifeGoalsList from './LifeGoalsList';
// import EditLifeGoal from './EditLifeGoal';
// import CreateLifeGoal from './CreateLifeGoal';

class LifeGoals extends React.Component {
  // constructor (props) {
  //   super(props);
  // }
  render (props) {
    return (
      <section>
        <h1>Life Goals</h1>
        <Link to="goals/create">
          <button>Create New Goal</button>
        </Link>
        <LifeGoalsList />
      </section>
    );
  }
}

export default LifeGoals;
