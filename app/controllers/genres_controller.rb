class GenresController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    def show
        genre = Genre.find_by(id: params[:id])
        render json: genre, status: :ok
    end

    def index
        genre = Genre.all
        render json: genre
    end
end
