require 'securerandom'

class Api::V1::ProfileCardsController < ApplicationController
  def create
    # profile_cards
    slug = SecureRandom.alphanumeric(6)
    bg_color = profile_cards_params["profile_cards"]["bg_color"]
    display_name = profile_cards_params["profile_cards"]["display_name"]
    grid_rows = profile_cards_params["profile_cards"]["grid_rows"]
    grid_columns = profile_cards_params["profile_cards"]["grid_columns"]

    profile_card = ProfileCard.create(
      slug: slug,
      bg_color: bg_color,
      display_name: display_name,
      grid_rows: grid_rows,
      grid_columns: grid_columns
    )

    profile_cards_params["albums"].each_with_index do |album, index|
      album = Album.find_or_create_by!(spotify_id: album["spotify_id"])

      profile_card.profile_card_albums.create!(album: album ,position: index)
    end
    render json: { slug: slug }
  end

  private

  def profile_cards_params
    params.require(:params).permit(
      profile_cards: [:display_name, :bg_color, :grid_rows, :grid_columns],
      albums: [:id, :src, :alt, :spotify_id]
    )
  end
end
