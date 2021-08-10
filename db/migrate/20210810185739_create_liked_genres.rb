class CreateLikedGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :liked_genres do |t|
      t.integer :profile_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
