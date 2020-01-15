module PetActions
  def walk
    self.mood = 'great!'
  end

  def feed
    self.hungry = false
  end
end