# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "cherfan", email: "cherfan@aol.com", password: "password")
Recipe.create(uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_f51c6a96b9ba6f581bc31c1d037290dd", label: "Grilled Sourdough Bread",
image: "https://www.edamam.com/web-img/5b0/5b03e74a5257172a689c73c8d6318f81.jpg",
source: "Martha Stewart", url: "http://www.marthastewart.com/317413/grilled-sourdough-bread",
yield: "6.0", ingredient_lines: ["1 1/4 pounds round sourdough bread loaf, cut into 8 wedges",
"Extra-virgin olive oil"])
