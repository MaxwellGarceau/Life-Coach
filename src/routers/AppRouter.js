import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import LifeGoals from '../components/LifeGoals';
import EditLifeGoal from '../components/EditLifeGoal';
import CreateLifeGoal from '../components/CreateLifeGoal';
import Calendar from '../components/calendar/Calendar';
import CalendarViewSelector from '../components/calendar/CalendarViewSelector';
import YearView from '../components/calendar/YearView';
import MonthView from '../components/calendar/MonthView';
import WeekView from '../components/calendar/WeekView';
import DailyView from '../components/calendar/DailyView';
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
        {/* Calendar */}
        <PrivateRoute path="/calendar/year" component={YearView} calendarViewSelector={true} />
        <PrivateRoute path="/calendar/month" component={MonthView} calendarViewSelector={true} />
        <PrivateRoute path="/calendar/week" component={WeekView} calendarViewSelector={true} />
        <PrivateRoute path="/calendar/day/:id" component={DailyView} calendarViewSelector={true} />
        {/* Delete daily-calendar path later */}
        <PrivateRoute path="/daily-calendar" component={DailyView} />
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
