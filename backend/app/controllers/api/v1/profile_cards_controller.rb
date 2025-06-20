class Api::V1::ProfileCardsController < ApplicationController
  def create
    params["params"]["albums"].each do |album|
      album["spotify_id"]
    end
  end

  private

  def profile_cards_params
    params.require(:params).permit(
      profile_cards: [:display_name, :grid_rows, :grid_columns],
      albums: [:id, :src, :alt, :spotify_id]
    )
  end
end
