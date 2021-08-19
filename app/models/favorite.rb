class Favorite < ApplicationRecord
    validates :movie_id, uniqueness: true

    belongs_to :profile
end
