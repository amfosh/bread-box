class AddContentToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :content, :string
  end
end
