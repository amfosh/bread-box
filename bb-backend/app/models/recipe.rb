class Recipe < ApplicationRecord
    has_many :notes
    belongs_to :user

    validates :user, :label, :ingredient_lines, presence: true
end

