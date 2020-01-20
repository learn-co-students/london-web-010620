class Fan < ActiveRecord::Base
  has_many :autographs
  has_many :authors, through: :autographs
end