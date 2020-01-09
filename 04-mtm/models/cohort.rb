class Cohort
  @@all = []

  attr_accessor :name

  def initialize(name)
    @name = name

    @@all << self
  end

  # returns an array of lecture instances that belong to a given cohort
  def lectures
    Lecture.all.select { |lecture| lecture.cohort == self }
  end

  def teachers
    lectures.map { |lecture| lecture.teacher }.uniq
  end

  def self.all
    @@all
  end
end