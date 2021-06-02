class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.float :stars
      t.string :location
      t.string :cuisine

      t.timestamps
    end
  end
end
