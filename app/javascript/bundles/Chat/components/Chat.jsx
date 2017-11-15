import PropTypes from 'prop-types';
import React from 'react';

export default class Chat extends React.Component {
  static propTypes = {};

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <p>Chatting</p>
      </div>
    );
  }
}
