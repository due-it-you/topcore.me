class Album < ApplicationRecord
  validates :spotify_id, presence: true, uniqueness: true
end
