class User < ApplicationRecord
has_secure_password
has_many :favorites
has_many :recipes

validates :username, :email, presence: true, uniqueness: true
end
