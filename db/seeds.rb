# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.create(name: "Copper Creek Pub", stars:5, location:'West Valley', cuisine:"Pub Food")
Restaurant.create(name: "Beto's", stars:4, location:'SLC', cuisine:"Mexican")
Restaurant.create(name: "Chow Time", stars:1, location:'SLC', cuisine:"nasty")
Restaurant.create(name: "Chicken Express", stars:5, location:'Texas', cuisine:"Comfort Food")
Restaurant.create(name: "Tony Burger", stars:1, location:'SLC', cuisine:"nasty")

puts "seeded facts size: #{Restaurant.all.size}"