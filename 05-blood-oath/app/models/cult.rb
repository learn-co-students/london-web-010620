class Cult
    @@all = []

    attr_reader :name, :location,:founding_year,:slogan

    def initialize(name,location,founding_year,slogan)
        @name = name
        @location = location
        @founding_year = founding_year
        @slogan = slogan


        @@all << self
    end

    def self.all
        @@all
    end

    def recruit_follower(follower)
        BloodOath.new(self,follower)
    end

    def followers
        BloodOath.all.select {|oath| oath.cult == self}
        .map {|oath| oath.follower}
    end

    def cult_population
        followers.count
    end

    def self.find_by_name(name)
        self.all.find {|cult| cult.name == name}
    end

    def self.find_by_location(location)
        self.all.select {|cult| cult.location == location}
    end

    def self.find_by_founding_year(founding_year)
        self.all.select {|cult| cult.founding_year == founding_year}
    end

    def average_age
        age_total = followers.reduce(0) {|total, curr| total + curr.age}
        age_total / cult_population
    end

    def youngest_follower
        followers.reduce do |total, curr| 
            # binding.pry
            total.age < curr.age ? total : curr
        end
    end

end