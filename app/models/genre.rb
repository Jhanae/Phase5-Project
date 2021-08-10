class Genre < ApplicationRecord
    # validates :profile_id, presence: true

    belongs_to :profile
end
