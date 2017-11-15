class ChatMessagesChannel < ApplicationCable::Channel
  def subscribed
    # as soon as rails receives a new msg, it sends it to every person subscribed to the channel (person emits msg, rails is listening, it broadcasts to anyone who's listening to that connection)
    stream_from "chat_#{params[:chat_uuid]}"
  end

  # data == messages sent to server (in this case it contains content & user_name)
  def receive(data)
    chat = Chat.find_by(uuid: params[:chat_uuid])

    message = chat.messages.create!(
      content: data['content'],
      user_name: data['user_name']
    )

    # broadcast checkin to subscribers
    # message.attributes: object to hash
    ActionCable.server.broadcast("chat_#{params[:chat_uuid]}", message.attributes)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
