import PropTypes from 'prop-types';
import React from 'react';

import { inject, observer } from 'mobx-react';

@inject('ChatStore')
@observer
export default class Chat extends React.Component {
  render() {
    const { ChatStore } = this.props;

    return (
      <div className="messages">
        {ChatStore.messages.map(message => (
          <div className="msg" key={message.id}>
            <div className="msg_user_name">{message.user_name}</div>
            <div className="msg_content">{message.content}</div>
          </div>
        ))}
      </div>
    );
  }
}
