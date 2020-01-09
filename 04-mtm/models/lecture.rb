class Lecture
  @@all = []

  attr_accessor :name, :cohort, :teacher, :duration

  def initialize(title, cohort, teacher, duration)
    @cohort = cohort
    @teacher = teacher
    @title = title
    @duration = duration

    @@all << self
  end

  def self.longest_lecture
    self.all.sort_by { |l| l.duration }.reverse[0]
  end

  # def self.longest_lecture
  #   current_longest_lecture = nil
  #   longest_lecture_time = 0

  #   self.all.each do |lecture|
  #     if lecture.duration >= longest_lecture_time
  #       current_longest_lecture = lecture
  #       longest_lecture_time = lecture.duration
  #     end
  #   end

  #   current_longest_lecture
  # end

  def self.all
    @@all
  end
end