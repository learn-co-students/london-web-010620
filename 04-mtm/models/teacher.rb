class Teacher
  @@all = []

  attr_accessor :name

  def initialize(name)
    @name = name

    @@all << self
  end

  def lectures
    Lecture.all.select { |lecture| lecture.teacher == self }
  end

  def cohorts
    lectures.map { |lecture| lecture.cohort }.uniq
  end

  def self.all
    @@all
  end
end