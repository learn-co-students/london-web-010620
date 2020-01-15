## everything is an object redux

```rb
  hello.methods
  class Dog; end
  Dog.new.methods.length
  Dog.ancestors
```

## since all pets have names...

```rb
  class Pet
    attr_reader :name
    attr_accessor :mood, :hungry?

    def initialize(name)
      @name = name
      @mood = 'nervous'
      @hungry? = true
    end
  end

  class Cat < Pet
    attr_reader :num_lives

    def initialize(name)
      # super
      @num_lives = 9
    end
  end
```

## can only inherit from one class - enter modules and include statements

Include is for adding methods to an instance of a class.
You're including more functionality - making the instances able to do more.

```rb
  module Foo
    def foo
      puts self
    end
  end

  class Bar
    include Foo
  end

  bar = Bar.new

  # bar.foo
  # Bar.foo
```

Therefore,

```rb
  module Feedable
    def feed
      self.hungry = false
    end
  end
```

```rb
  class Pet

    include Feedable

    attr_reader :name
    attr_accessor :mood, :hungry?

    def initialize(name)
      @name = name
      @mood = 'nervous'
      @hungry? = true
    end
  end

```

### notes

```rb
module Feedable
  def feed
    self.is_hungry = false
  end
end

class Pet
  include Feedable

  attr_reader :name
  attr_accessor :mood, :is_hungry

  def initialize(name)
    @name = name
    @mood = 'nervous'
    @is_hungry = true
  end
end

class Cat < Pet
  attr_reader :num_lives
  include Feedable

  def initialize(name)
    super
    @num_lives = 9
  end
end

puts 'hi'
c1 = Cat.new('meow')
require 'pry'; binding.pry
```
