class Artist

  attr_reader :name, :years_experience

  @@all = []
  
  def initialize(name, years_experience)
    @name = name
    @years_experience = years_experience
    @@all << self
  end

  def self.all
    @@all
  end

  def self.total_experience
    all_years_experience = @@all.map do |artist|
      artist.years_experience
    end

    all_years_experience.sum
  end

  def self.most_prolific
    self.all.max_by do |artist|
      artist.paintings.count / artist.years_experience
    end
  end

  def paintings
    Painting.all.select { |painting| painting.artist == self }
  end

  def galleries
    self.paintings.map { |painting| painting.gallery }
  end

  def cities
    self.galleries.map do |gallery|
      gallery.city
    end
  end

  def create_painting(title, price, gallery)
    Painting.new(title, price, self, gallery)
  end

end
