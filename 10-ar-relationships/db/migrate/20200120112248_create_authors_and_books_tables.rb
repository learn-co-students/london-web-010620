class CreateAuthorsAndBooksTables < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :name
    end

    create_table :books do |t|
      t.string :title
      t.string :genre
      t.integer :author_id
    end
  end
end
