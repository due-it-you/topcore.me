class CreateProfileCards < ActiveRecord::Migration[7.2]
  def change
    create_table :profile_cards do |t|
      t.timestamps
    end
  end
end
