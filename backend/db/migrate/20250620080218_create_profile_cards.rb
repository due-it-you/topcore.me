class CreateProfileCards < ActiveRecord::Migration[7.2]
  def change
    create_table :profile_cards do |t|
      t.string :slug, null: false
      t.string :bg_color, null: false
      t.string :display_name, null: false
      t.integer :grid_rows, null: false
      t.integer :grid_columns, null: false
      t.timestamps
    end
  end
end
