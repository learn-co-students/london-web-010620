require 'pry'

require_relative './models/lecture'
require_relative './models/teacher'
require_relative './models/cohort'
require_relative './models/learning_goal'

dan = Teacher.new('daniel')
sam = Teacher.new('sam')

se_mod_1 = Cohort.new('software eng. mod 1')
ds_mod_1 = Cohort.new('data science mod 1')

Lecture.new('oo mtm', se_mod_1, dan, 45)
Lecture.new('oo otm', se_mod_1, dan, 57)
Lecture.new('intro to numpy', ds_mod_1, dan, 90)
Lecture.new('oo intro', se_mod_1, dan, 60)
Lecture.new('intro to git', se_mod_1, sam, 60)

binding.pry
