class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :label, :image, :directions, :ingredient_lines
end
