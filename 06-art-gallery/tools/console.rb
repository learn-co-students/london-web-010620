require_relative '../config/environment.rb'

g1 = Gallery.new('Saatchi', 'London')
g2 = Gallery.new('Emotion in Paint', 'Hong Kong')
g3 = Gallery.new('Prestigieux', 'Bordeaux')

a1 = Artist.new('Claudia Classic', 1000)
a2 = Artist.new('Connie Contemporary', 5)
a3 = Artist.new('Patrick Painter', 200)

p1 = Painting.new('Fruits in a Bowl', 800000000, a1, g1)
p2 = Painting.new('Sunset', 350, a1, g3)
p3 = Painting.new('A Family', 12000000, a1, g2)
p4 = Painting.new('Thoughts of the Universe', 400000000, a2, g1)
p5 = Painting.new('The Dance', 1500, a3, g2)
p6 = Painting.new('Death of Love', 2400, a3, g3)

binding.pry

puts "Bob Ross rules."
