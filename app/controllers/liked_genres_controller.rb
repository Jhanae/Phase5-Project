class LikedGenresController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def create
        genre = Genre.create(genre_params)
        if genre.valid?
            render json: genre, status: :created
        else
            render json: {"errors:" => genre.errors.full_messages}
        end
    end

    def show
        genre = Genre.find_by(id: params[:id])
        render json: genre, status: :ok
    end

    def destroy
        genre = Genre.find_by(id: params[:id])
        genre.destroy
        head :no_content            
    end

    def index
        genre = Genre.all
        render json: genre
    end
    private
    def profile_params
        params.permit(:profile_id, :genre_id)
    end
    
    def render_not_found(invalid)
        render json: { "error:" => "Favorite Genre not found"}, status: :not_found
    end

end
