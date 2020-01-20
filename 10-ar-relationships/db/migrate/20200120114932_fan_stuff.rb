class FanStuff < ActiveRecord::Migration[5.2]
  def change
    create_table :fans do |t|
      t.string :name
    end

    create_table :autographs do |t|
      t.integer :fan_id
      t.integer :author_id
    end 
  end
end
