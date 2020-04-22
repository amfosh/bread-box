class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :recipes
end
