class ProfileCard < ApplicationRecord
  mount_uploader :avatar, AvatarUploader

  has_many :profile_card_albums
  has_many :albums, through: :profile_card_albums

  validates :slug, presence: true, length: { in: 1..20 }, uniqueness: true
  validates :bg_color, presence: true
  validates :display_name, presence: true, length: { in: 1..20 }
  validates :grid_rows, presence: true, numericality: { only_integer: true }
  validates :grid_columns, presence: true, numericality: { only_integer: true }

  def self.create_with_albums!(profile_cards_params)
    transaction do
      profile_card = ProfileCard.create!(
        slug: SecureRandom.alphanumeric(6),
        bg_color: profile_cards_params["profile_cards"]["bg_color"],
        display_name: profile_cards_params["profile_cards"]["display_name"],
        grid_rows: profile_cards_params["profile_cards"]["grid_rows"],
        grid_columns: profile_cards_params["profile_cards"]["grid_columns"],
        avatar: profile_cards_params["profile_cards"]["avatar"]
      )

      profile_cards_params["albums"].each_with_index do |album, index|
        album = Album.find_or_create_by!(spotify_id: album["spotify_id"])

        profile_card.profile_card_albums.create!(album: album ,position: index)
      end
      
      profile_card
    end
  end
end
