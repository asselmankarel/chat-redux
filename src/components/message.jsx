import React, { PureComponent } from 'react';

class Message extends PureComponent {
  render() {
    const { message } = this.props;
    return (
      <div className="message pl-4 py-2 bg-light">
        <div className="row">
          <h3>{message.author}</h3>
          <span className="ml-2 mt-2"> - {(new Intl.DateTimeFormat('nl-BE', { hour: 'numeric', minute: 'numeric' }).format(new Date(message.created_at)))}</span>
        </div>
        <p>{message.content}</p>
      </div>
    );
  }
}

export default Message;
