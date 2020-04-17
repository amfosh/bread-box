class RemoveColumnsFromRecipes < ActiveRecord::Migration[6.0]
  def change

    remove_column :recipes, :uri, :string

    remove_column :recipes, :source, :string

    remove_column :recipes, :url, :string
  end
end
