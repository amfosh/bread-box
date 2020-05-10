class AddColumnToRecipes < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :liked, :boolean, :default => false
  end
end
