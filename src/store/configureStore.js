import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import lifeGoalsReducer from '../reducers/life-goals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      lifeGoals: lifeGoalsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
