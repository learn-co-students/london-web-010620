class Place < ActiveRecord::Base

  def self.update_infestation_status(infestation_status)
    self.all.each do |place|
      puts "this is place: #{place}"
      place.update(infested: infestation_status)
    end
  end

  def describe
    "This place has #{self.num_beds} beds."
  end
end