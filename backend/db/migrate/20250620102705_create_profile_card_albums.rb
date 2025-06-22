class CreateProfileCardAlbums < ActiveRecord::Migration[7.2]
  def change
    create_table :profile_card_albums do |t|
      t.string :position, null: false
      t.references :profile_card, null: false, foreign_key: true
      t.references :album, null: false, foreign_key: true

      t.timestamps
    end
  end
end
