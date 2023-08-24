class Currency < ApplicationRecord
  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end

  def current_price
    request = HTTParty.get(price_url + "ids=#{self.slug}")
    response = request[self.slug]['inr']
  end

  private

  def price_url
    "https://api.coingecko.com/api/v3/simple/price?vs_currencies=inr&"
  end
end
