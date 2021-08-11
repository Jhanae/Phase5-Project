class UsersController < ApplicationController    
    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {"errors:" => "Invalid Credentials"}
        end
    end
    
    def index
        user = User.all
        render json: user, :include => {:profile => {only: [ :id, :user_id, :username, :image ] }}, status: :ok
    end
    
    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user
        else 
            render json: {"error:" => "User not found"}
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        head :no_content            
    end

    private
    def user_params
        params.permit(:email, :password)
    end
end
