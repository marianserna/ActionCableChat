# frozen_string_literal: true

class ChatsController < ApplicationController
  def new
    @chat = Chat.new
  end

  def create
    @chat = Chat.new(chat_params)
    @chat.uuid = SecureRandom.uuid

    if @chat.save
      redirect_to chat_url(@chat.uuid)
    else
      render :new
    end
  end

  def show
    # id is actually uuid
    @chat = Chat.find_by(uuid: params[:id])
    @chat_props = {
      chatData: @chat,
      messages: @chat.messages.order(created_at: :desc)
    }
  end

  private

  def chat_params
    params.require(:chat).permit(:name)
  end
end
