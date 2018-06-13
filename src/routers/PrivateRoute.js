import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import CalendarViewSelector from '../components/calendar/CalendarViewSelector';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  calendarViewSelector,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (
      isAuthenticated ? (
        <div>
          <Header />
          {calendarViewSelector && <CalendarViewSelector />}
          {console.log('Calendar View Selector', props.calendarViewSelector)}
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    )}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
