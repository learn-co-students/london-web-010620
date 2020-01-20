class Autograph < ActiveRecord::Base
  belongs_to :fan
  belongs_to :author
end