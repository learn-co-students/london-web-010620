class Gallery

  attr_reader :name, :city

  @@all = []
  
  def initialize(name, city)
    @name = name
    @city = city
    @@all << self
  end

  def self.all
    @@all
  end

  def paintings
    Painting.all.select { |painting| painting.gallery == self }
  end

  def artists
    self.paintings.map { |painting| painting.artist }
  end

  def artist_names
    self.artists.map do |artist|
      artist.name
    end
  end

  def most_expensive_painting
    paintings.max_by do |painting|
      painting.price
    end
  end


end
