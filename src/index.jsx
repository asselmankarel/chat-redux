// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import channelsReducer from './reducers/channelsReducer';
import messagesReducer from './reducers/messagesReducer';
import currentUserReducer from './reducers/currentUserReducer';


// initial state
const initialState = {
  channels: ["general", "paris", "react"],
  messages: [],
  currentUser: prompt('Enter username: ') || `Anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: "general"
};

// State and reducers
const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer
});

const middlewares = applyMiddleware(logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
