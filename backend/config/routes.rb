Rails.application.routes.draw do
  root to: proc { [200, {}, ['API is live']] }

  namespace :api do
    namespace :v1 do
      resources :albums, only: %i[] do
        collection do
          get :search
        end
      end
      resources :profile_cards, only: %i[create show]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
