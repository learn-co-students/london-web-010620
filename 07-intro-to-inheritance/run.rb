require_relative 'pet'
require_relative 'pet_actions'
require_relative 'dog'
require_relative 'cat'

my_dog = Dog.new('fido', 14)
my_cat = Cat.new('fluffers', 6, 'pink')

require 'pry'; binding.pry