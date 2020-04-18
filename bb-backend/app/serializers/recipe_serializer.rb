class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  # belongs_to :user
  attributes :label, :image, :yield, :ingredient_lines
end
