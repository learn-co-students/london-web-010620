require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console
c1 = Cult.new("Masons","New York",1899,"Give me my money")
c2 = Cult.new("Cyclists","London",2001,"We own the roads")
c3 = Cult.new("18Wheelers","London",1999,"Can't be stopped")

f1 = Follower.new("Santiago", 26, "Hey be easy man")
f2 = Follower.new("Jashana", 23, "Ruby ugh!")
f3 = Follower.new("Sergio", 28, "Instances are great!")
# binding.pry

c1.recruit_follower(f1)
c1.recruit_follower(f2)
c1.recruit_follower(f3)

# c1.youngest_follower

binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits
