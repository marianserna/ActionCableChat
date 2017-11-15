import { observable, action } from 'mobx';
import ActionCable from 'actioncable';

class ChatStore {
  @observable chat = {};
  @observable messages = [];
  @observable userName = '';

  constructor() {
    // connect to rails websockets
    this.cable = ActionCable.createConsumer('/cable');
  }

  @action
  setupSubscription = chat_uuid => {
    this.subscription = this.cable.subscriptions.create(
      {
        channel: 'ChatMessagesChannel', // ChatMessagesChannel lines up with the class created in rails
        chat_uuid
      },
      {
        received: message => {
          this.messages.push(message);
        }
      }
    );
  };

  @action
  sendMessage = text => {
    this.subscription.send({
      content: text,
      user_name: this.userName
    });
  };
}

const singleton = new ChatStore();
export default singleton;
