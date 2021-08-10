Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users, only:[:create, :show, :index]
  resources :profiles, only:[:show, :create, :update, :destroy, :index] 
  resources :genres, only:[:show, :index] 
  resources :favorites, only:[:index, :show]
  resources :liked_genres, only:[:index, :show, :create, :destroy]
end
