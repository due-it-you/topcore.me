class Api::V1::AlbumsController < ApplicationController
  def search
    # アクセストークンの取得
    response = HTTP.headers("Content-Type" => "application/x-www-form-urlencoded")
              .post("https://accounts.spotify.com/api/token", form: {
                grant_type: "client_credentials",
                client_id: ENV['SPOTIFY_CLIENT_ID'],
                client_secret: ENV['SPOTIFY_CLIENT_SECRET']
              })
    access_token = JSON.parse(response.body.to_s)["access_token"]

    # アルバムの検索結果の取得
    search_words = URI.encode_www_form_component("椎名林檎")
    response = HTTP.headers("Authorization" => "Bearer #{access_token}")
        .get("https://api.spotify.com/v1/search?q=#{search_words}&type=album&market=JP")
    data = JSON.parse(response.body.to_s)
    render json: { response: data }
  end
end
