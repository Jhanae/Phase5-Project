class Genre < ApplicationRecord
    # validates :profile_id, presence: true

    belongs_to :profile
    has_many :liked_genres
end
