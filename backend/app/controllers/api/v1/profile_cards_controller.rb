require 'securerandom'

class Api::V1::ProfileCardsController < ApplicationController
  def create
    profile_card = ProfileCard.create_with_albums!(profile_cards_params)
    render json: { slug: profile_card.slug }
  rescue ActiveRecord::RecordInvalid => e
    render json: { error: e.message }
  end

  private

  def profile_cards_params
    params.require(:params).permit(
      profile_cards: [:display_name, :bg_color, :grid_rows, :grid_columns],
      albums: [:id, :src, :alt, :spotify_id]
    )
  end
end
