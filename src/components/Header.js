import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Life Coach</h1>
        </Link>
        <Link to="/goals">
          <button className="button button--link">Life Goals</button>
        </Link>
        <Link to="/daily-calendar">
          <button className="button button--link">Daily Calendar</button>
        </Link>
        <Link to="/calendar">
          <button className="button button--link">Calendar</button>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
