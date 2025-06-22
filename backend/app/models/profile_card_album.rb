class ProfileCardAlbum < ApplicationRecord
  belongs_to :profile_card
  belongs_to :album
end
