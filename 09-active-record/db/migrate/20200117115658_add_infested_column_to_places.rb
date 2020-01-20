class AddInfestedColumnToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :infested, :string
  end
end
