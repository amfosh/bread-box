class Api::V1::FavoritesController < ApplicationController

    def index

        favorites = Favorite.all
    
        render json: favorites, status: 200
      end
end
