import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { startGetGoals } from './actions/life-goals';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import os from 'os';

// Determines hostname programmatically. DOUBLE CHECK WHEN DEPLOYNG TO PRODUCTION.
const graphQlUri = os.hostname() !== 'localhost' ? `${os.hostName()}graphql` : 'http://localhost:8081/graphql';

const client = new ApolloClient({
  uri: graphQlUri
});

const store = configureStore();

const jsx = (
  <ApolloProvider client={client} >
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ApolloProvider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startGetGoals()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
