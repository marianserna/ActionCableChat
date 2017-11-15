import PropTypes from 'prop-types';
import React from 'react';

import { Provider } from 'mobx-react';

import ChatStore from '../stores/ChatStore';
import Messages from './Messages';
import WriteMessage from './WriteMessage';

export default class Chat extends React.Component {
  static propTypes = {
    chatData: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    ChatStore.setupSubscription(props.chatData.uuid);
    ChatStore.chat = props.chat;
    ChatStore.messages = props.messages;
  }

  updateName = name => {
    this.setState({ name });
  };

  render() {
    return (
      <Provider ChatStore={ChatStore}>
        <div>
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={e => {
              ChatStore.userName = e.target.value;
            }}
          />
          <Messages />
          <WriteMessage />
        </div>
      </Provider>
    );
  }
}
