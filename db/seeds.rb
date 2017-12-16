50.times do 
  content = Faker::Lorem.paragraph(2)
  Post.create(content: content)
end 

