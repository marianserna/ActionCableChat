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
    this.cable.subscriptions.create(
      {
        channel: 'ChatMessagesChannel', // ChatMessagesChannel lines up with the class created in rails
        chat_uuid
      },
      {
        received: data => {
          console.log(data);
        }
      }
    );
  };

  @action sendMessage = text => {};
}

const singleton = new ChatStore();
export default singleton;
