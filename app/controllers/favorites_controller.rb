class FavoritesController < ApplicationController
    def index
        favorite = Favorite.all
        render json: favorite
    end
    def show
        favorite = Favorite.find_by(id: params[:id])
        render json: favorite, status: :ok
    end
    def create
        favorite = Favorite.create(favorite_params)
        if favorite.valid?
            render json: favorite, status: :created
        else
            render json: {"errors:" => favorite.errors.full_messages}
        end
    end
    def destroy
        favorite = Favorite.find_by(id: params[:id])
        favorite.destroy
        head :no_content            
    end

    private
    def favorite_params
        params.permit(:movieName, :movie_id, :profile_id)
    end
end
