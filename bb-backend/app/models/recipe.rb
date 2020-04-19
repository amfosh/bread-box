class Recipe < ApplicationRecord
    has_many :favorites
    belongs_to :user

    validates :user, :label, :ingredient_lines, presence: true
end

