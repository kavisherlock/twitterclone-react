class AddNameToUsers < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.string :first_name, :last_name
    end
  end
end
