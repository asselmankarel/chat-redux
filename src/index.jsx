// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

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

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
