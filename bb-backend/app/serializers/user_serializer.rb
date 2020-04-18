class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :recipes
  # has_many :recipes, serializer: RecipeSerializer
end
