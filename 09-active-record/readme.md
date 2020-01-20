```rb
class Place < ActiveRecord::Base
end

def change
  create_table :places do |t|
    t.string :address
    t.integer :num_beds
    t.boolean :available
  end
end

def change
  add_column :places, :name, :string
end
```
