class CreateAlbums < ActiveRecord::Migration[7.2]
  def change
    create_table :albums do |t|
      t.string :spotify_id, null: false
      t.timestamps
    end
  end
end
