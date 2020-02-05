class Destination < ApplicationRecord
    has_many :posts
    has_many :bloggers, through: :posts

    def avg_age
        ubloggers = self.bloggers.uniq.count
        total = ubloggers.sum {|blogger| blogger.age } / ubloggers

        # total / ubloggers
    end

    def featured_post
        self.posts.max_by {|post| post.likes}
    end

    def recent_posts
        self.posts.reverse.take(5)
    end
end
