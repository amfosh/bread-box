class Recipe < ApplicationRecord
    belongs_to :user

    validates :user, :label, :ingredient_lines, :directions, presence: true
end

