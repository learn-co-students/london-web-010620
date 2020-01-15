class Dog < Pet
  # including a module
  # adds all the methods within the module
  # as INSTANCE methods on the class that included it
  include PetActions

  def make_sound
    'woof'
  end
end