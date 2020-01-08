class User
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end

  def total_tweets_length
    total_size = 0
    tweets.each do |tweet|
      total_size += tweet.text.size
    end
    total_size
  end

  def average_tweet_length
    total_tweets_length / tweets.size
  end
end