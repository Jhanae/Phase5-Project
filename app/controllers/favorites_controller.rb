class FavoritesController < ApplicationController
    def index
        favorite = Favorite.all
        render json: favorite
    end
end
