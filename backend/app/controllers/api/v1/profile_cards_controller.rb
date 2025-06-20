require 'securerandom'

class Api::V1::ProfileCardsController < ApplicationController
  def create
    # profile_cards
    slug = SecureRandom.alphanumeric(6)
    bg_color = profile_cards_params["profile_cards"]["bg_color"]
    display_name = profile_cards_params["profile_cards"]["display_name"]
    grid_rows = profile_cards_params["profile_cards"]["grid_rows"]
    grid_columns = profile_cards_params["profile_cards"]["grid_columns"]
  end

  private

  def profile_cards_params
    params.require(:params).permit(
      profile_cards: [:display_name, :bg_color, :grid_rows, :grid_columns],
      albums: [:id, :src, :alt, :spotify_id]
    )
  end
end
