import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import LifeGoalsList from './LifeGoalsList';

// TEST
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getUsersQuery = gql`
  {
    user(id: "5bd09ae58ac6750cbed4460d") {
      email
      password
      id
    }
  }
`

class LifeGoals extends React.Component {
  render (props) {
    console.log(this.props);
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

export default graphql(getUsersQuery)(LifeGoals);
