class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :size
      t.integer :age
      t.boolean :rare

      t.timestamps
    end
  end
end
