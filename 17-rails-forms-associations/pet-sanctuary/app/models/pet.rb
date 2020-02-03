class Pet < ApplicationRecord
  belongs_to :user

  def username
    self.user.username
  end
end
