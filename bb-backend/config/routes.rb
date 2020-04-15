Rails.application.routes.draw do
  resources :favorites
  resources :recipes
  namespace :api do
    namespace :v1 do
      resources :users
      resources :recipes
      resources :favorites
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
