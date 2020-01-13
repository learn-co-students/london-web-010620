class BloodOath
    @@all = []

    attr_reader :cult, :follower

    def initialize(cult,follower)
        @cult = cult
        @follower = follower
        @initiation_date = Date.today.to_s
        @@all << self
    end

    def self.all
        @@all
    end
end
