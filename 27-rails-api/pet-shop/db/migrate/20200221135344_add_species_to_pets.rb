# frozen_string_literal: true

class AddSpeciesToPets < ActiveRecord::Migration[6.0]
  def change
    add_reference :pets, :species, null: true, foreign_key: true
  end
end
