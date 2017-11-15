class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :chat_id, null: false
      t.string :user_name, null: false
      t.text :content, null: false

      t.timestamps
    end

    add_index :messages, :chat_id
  end
end
