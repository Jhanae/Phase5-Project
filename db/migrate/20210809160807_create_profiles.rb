class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :username
      t.string :image
      t.string :fav_actor
      t.string :fav_region
      t.string :fav_genre

      t.timestamps
    end
  end
end
