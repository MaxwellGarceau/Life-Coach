import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import LifeGoals from '../components/LifeGoals';
import DailyView from '../components/DailyView';
import WeekView from '../components/WeekView';
import EditLifeGoal from '../components/EditLifeGoal';
import CreateLifeGoal from '../components/CreateLifeGoal';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/daily-calendar" component={DailyView} />
        <PrivateRoute path="/weekly-calendar" component={WeekView} />
        <PrivateRoute path="/life-goals" component={LifeGoals} />
        <PrivateRoute path="/create-goal" component={CreateLifeGoal} />
        <PrivateRoute path="/edit/:id" component={EditLifeGoal} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
