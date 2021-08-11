class DropGenre < ActiveRecord::Migration[6.1]
  def change
    drop_table :genre
  end
end
