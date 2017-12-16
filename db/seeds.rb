20.times do
  title = Faker::Lorem.word
  content = Faker::Lovecraft.paragraph
  user_id = Faker::Number.between(1, 10)
  Post.create(title: title, content: content, user_id: user_id)
end
