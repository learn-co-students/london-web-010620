class Painting

  attr_accessor :gallery
  attr_reader :title, :price, :artist

  @@all = []

  def initialize(title, price, artist, gallery)
    @gallery = gallery
    @title = title
    @price = price
    @artist = artist
    @@all << self
  end

  def self.all
    @@all
  end

  def self.total_price
    all_prices = self.all.map { |painting| painting.price }

    all_prices.sum
  end

  def self.first_painting_worth_a_mil
    self.all.find { |painting| painting.price > 999999 }
  end

  def self.most_expensivest
    self.all.max_by { |painting| painting.price }
  end

end
