class CurrenciesController < ApplicationController
  def index; end

  def search
    render json: { currencies: currencies}
  end

  # Takes in the currency id and the amount owned
  # Returns final calculations
  def calculate
    render json: {
      currency: currency,
      current_price: currency.current_price,
      amount: amount,
      value: currency.calculate_value(amount)
    }
  end

  private

  def amount
    params[:amount]
  end

  def currency
    @currency ||= Currency.find(params[:id])
  end

  def currencies
    @currencies ||= Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
  end
end
