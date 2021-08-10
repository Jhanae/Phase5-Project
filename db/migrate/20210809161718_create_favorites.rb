class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :movieName
      t.integer :movie_id
      t.integer :profile_id
      t.timestamps
    end
  end
end
