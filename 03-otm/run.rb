require_relative './user'
require_relative './tweet'
require 'pry'

dan = User.new('daniel', 28)
gabe = User.new('gabriel', 24)
ben = User.new('ben', 30)

Tweet.new('hello world', dan)
Tweet.new('rain', dan)
Tweet.new('political rant', dan)
Tweet.new('links', dan)
Tweet.new('a pic of bread', dan)
Tweet.new('rain', dan)

Tweet.new('123', gabe)
Tweet.new('234598', gabe)
Tweet.new('530900000000', gabe)

Tweet.new('i ♥️ flatiron', ben)

binding.pry
