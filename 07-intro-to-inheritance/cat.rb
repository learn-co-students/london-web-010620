class Cat < Pet

  def initialize(name, age, colour)
    # super by default takes the arguments passed to initialize
    # implicitly, in the order specified
    super(name, age) # this basically calls Pet.new (which calls Pet's initalize)
    @lives = 9
    @colour = colour
  end

  def self.all
    @@all.select {|pet| pet.class == self}
  end


  def make_sound
    'meow'
  end
end