import React from 'react';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="channels" />
      <MessageList />
    </div>
  );
};


export default App;
