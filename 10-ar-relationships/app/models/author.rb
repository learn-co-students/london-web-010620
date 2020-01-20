class Author < ActiveRecord::Base
  has_many :books
  has_many :autographs
  has_many :fans, through: :autographs
end