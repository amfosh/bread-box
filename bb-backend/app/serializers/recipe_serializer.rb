class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  # belongs_to :user
  attributes :label, :image, :directions, :ingredient_lines
end
