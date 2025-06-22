class Album < ApplicationRecord
  has_many :profile_card_albums
  has_many :profile_cards, through: :profile_card_albums
  
  validates :spotify_id, presence: true, uniqueness: true
end
