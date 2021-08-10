class FavoritesController < ApplicationController
    def index
        favorite = Favorite.all
        render json: favorite
    end
    def show
        favorite = Favorite.find_by(id: params[:id])
        render json: favorite, status: :ok
    end
end
