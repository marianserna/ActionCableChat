import { observable, action } from 'mobx';

class ChatStore {
  @observable chat = {};
  @observable messages = [];
  @observable userName = '';

  @action sendMessage = text => {};
}

const singleton = new ChatStore();
export default singleton;
