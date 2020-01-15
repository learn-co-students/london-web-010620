class Pet

  @@all = []

  attr_reader :name, :age
  attr_accessor :hungry, :mood

  def initialize(name, age)
    @hungry = true
    @lives = 1
    @mood = 'afraid'
    @age = age
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def make_sound
    'i am making an animal sound'
  end
end