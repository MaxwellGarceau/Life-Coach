import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/user-area/LoginPage';
import SignUpPage from '../components/user-area/SignUpPage';
// Calendar
import Calendar from '../components/calendar/Calendar';
// Life Goals
import LifeGoals from '../components/life-goals/LifeGoals';
import EditLifeGoal from '../components/life-goals/EditLifeGoal';
import CreateLifeGoal from '../components/life-goals/CreateLifeGoal';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/signup" component={SignUpPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        {/* Calendar */}
        <PrivateRoute path="/calendar" component={Calendar} />
        {/* Life Goals */}
        <PrivateRoute path="/goals/edit/:id" component={EditLifeGoal} />
        <PrivateRoute path="/goals/create" component={CreateLifeGoal} />
        <PrivateRoute path="/goals" component={LifeGoals} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
