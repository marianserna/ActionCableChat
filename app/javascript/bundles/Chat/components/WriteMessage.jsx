import PropTypes from 'prop-types';
import React from 'react';

import { inject, observer } from 'mobx-react';

@inject('ChatStore')
@observer
export default class WriteMessage extends React.Component {
  submitForm = e => {
    e.preventDefault();
    // pass content in textarea to sendMessage function
    this.props.ChatStore.sendMessage(this.content.value);
    e.target.reset();
  };

  render() {
    const { ChatStore } = this.props;

    return (
      <form
        onSubmit={e => {
          this.submitForm(e);
        }}
      >
        <textarea ref={area => (this.content = area)} />
        <button type="submit">Send</button>
      </form>
    );
  }
}
