class ProfileCard < ApplicationRecord
  has_many :profile_card_albums
  has_many :albums, through: :profile_card_albums
  
  validates :slug, presence: true, length: { in: 1..20 }, uniqueness: true
  validates :bg_color, presence: true
  validates :display_name, presence: true, length: { in: 1..20 }
  validates :grid_rows, presence: true, numericality: { only_integer: true }
  validates :grid_columns, presence: true, numericality: { only_integer: true }
end
