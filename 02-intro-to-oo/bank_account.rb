require 'pry'

class BankAccount
  attr_accessor :balance

  @@all = []

  def initialize(balance, user_id)
    @balance = balance
    @user_id = user_id

    @@all << self
  end

  def self.all
    @@all
  end

  def deposit(how_much_to_add)
    @balance = @balance + how_much_to_add
  end

  def balance_inquiry
    "Your balance is £#{self.balance}"
  end
end

# every time you run .new, initialize runs
ba_1 = BankAccount.new(5319, 5)
ba_2 = BankAccount.new(1, 1)
ba_3 = BankAccount.new(138888, 8)

binding.pry
