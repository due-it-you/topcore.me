class AddAvatarToProfileCards < ActiveRecord::Migration[7.2]
  def change
    add_column :profile_cards, :avatar, :string
  end
end
