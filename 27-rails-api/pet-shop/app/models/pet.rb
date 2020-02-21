# frozen_string_literal: true

class Pet < ApplicationRecord
  belongs_to :species

  validates :name, uniqueness: true
end
