import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

import getUserById from '../../graphql/queries/users/getUserById';
import userSignUp from '../../graphql/mutations/users/userSignUp';
import LifeGoalsList from './LifeGoalsList';

class LifeGoals extends React.Component {
  render (props) {
    console.log(this.props.userSignUp);
    return (
      <section>
        <button onClick={() => this.props.userSignUp({
          variables: {
            email: 'frontendtest@test.com',
            password: 'test12345!@#$'
          }
        })}>User Sign Up</button>
        <h1>Life Goals</h1>
        <Link to="goals/create">
          <button>Create New Goal</button>
        </Link>
        <LifeGoalsList />
      </section>
    );
  }
}

export default compose(
  graphql(getUserById, { name: 'getUserById' }),
  graphql(userSignUp, { name: 'userSignUp' })
)(LifeGoals);
