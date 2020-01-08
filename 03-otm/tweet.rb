class Tweet
  attr_accessor :text, :user
  @@all = []

  def initialize(text, user)
    @text = text
    @user = user
    @@all << self
  end

  def self.all_users
    self.all.map { |tweet| tweet.user }.uniq
  end

  def self.all
    @@all
  end
end