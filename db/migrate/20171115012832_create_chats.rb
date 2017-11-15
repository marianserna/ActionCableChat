class CreateChats < ActiveRecord::Migration[5.1]
  def change
    create_table :chats do |t|
      t.string :uuid, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :chats, :uuid, unique: true
  end
end
