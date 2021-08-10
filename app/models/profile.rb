class Profile < ApplicationRecord
    validates :user_id, uniqueness: true
    
    belongs_to :user
    has_many :genres
    has_many :liked_genres, through: :genres
    # has_many :products, through: :cart_items
end
