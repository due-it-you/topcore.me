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

    render json: { response: access_token }
  end
end
