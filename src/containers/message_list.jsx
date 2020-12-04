// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="message-list">
        {messages.map((message) => {
          return <Message message={message} key={message.created_at}/>
        })}
      </div>
    );
  }
}

function MapReduxStateToProps(reduxState) {
  return { messages: reduxState.messages };
}

export default connect(MapReduxStateToProps)(MessageList);
