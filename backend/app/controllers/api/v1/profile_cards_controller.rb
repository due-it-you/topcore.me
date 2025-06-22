require 'securerandom'

class Api::V1::ProfileCardsController < ApplicationController
  def create
    profile_card = ProfileCard.create_with_albums!(profile_cards_params)
    render json: { slug: profile_card.slug }
  rescue ActiveRecord::RecordInvalid => e
    render json: { error: e.message }
  end

  def show
    slug = params[:id]
    profile_card = ProfileCard.find_by(slug: slug)
    spotify_ids_arr = []
    profile_card.albums.each do |album|
      spotify_ids_arr << album.spotify_id
    end
    spotify_ids_str = spotify_ids_arr.join(',')

    # アクセストークンの取得
    response = HTTP.headers("Content-Type" => "application/x-www-form-urlencoded")
              .post("https://accounts.spotify.com/api/token", form: {
                grant_type: "client_credentials",
                client_id: ENV['SPOTIFY_CLIENT_ID'],
                client_secret: ENV['SPOTIFY_CLIENT_SECRET']
              })
    access_token = JSON.parse(response.body.to_s)["access_token"]

    # アルバムの情報の取得
    response = HTTP.headers("Authorization" => "Bearer #{access_token}")
                .get("https://api.spotify.com/v1/albums?ids=#{spotify_ids_str}&market=JP")
    assigned_albums = JSON.parse(response.body.to_s)
    albums = []
    assigned_albums["albums"].each do |album|
      album_data = {
                    name: album["name"],
                    external_url: album["external_urls"]["spotify"],
                    image_url: album["images"].second["url"]
                  }
      albums << album_data
    end
    profile_card = {
      bg_color: profile_card.bg_color,
      display_name: profile_card.display_name,
      grid_rows: profile_card.grid_rows,
      grid_columns: profile_card.grid_columns,
      avatar: profile_card.avatar
    }
    render json: { profile_card: profile_card, albums: albums }
  end

  private

  def profile_cards_params
    params.permit(
      profile_cards: [:display_name, :bg_color, :grid_rows, :grid_columns, :avatar],
      albums: [:id, :src, :alt, :spotify_id]
    )
  end
end
