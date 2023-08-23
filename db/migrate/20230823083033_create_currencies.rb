class CreateCurrencies < ActiveRecord::Migration[7.0]
  def change
    create_table :currencies do |t|
      t.string :name
      t.string :description
      t.string :currency_symbol
      t.string :slug
      t.bigint :max_supply

      t.timestamps
    end
  end
end