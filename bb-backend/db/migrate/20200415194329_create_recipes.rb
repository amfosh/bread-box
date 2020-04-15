class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :uri
      t.string :label
      t.string :image
      t.string :source
      t.string :url
      t.string :yield
      t.string :ingredient_lines

      t.timestamps
    end
  end
end
