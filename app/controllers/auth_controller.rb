class AuthController < ApplicationController
    def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            token = encode({user_id: user.id})
            render json: {
                authenticated: true,
                message: "user logged in",
                # token: token,
                user: user
                # profile: profile
            }, status: :accepted
        else
            render json: {
                authenticated: false,
                message: "ACCESS_DENIED"
            }, status: :unauthorized
        end
    end
    def signup
        user = User.create(user_params)
        userID = user.id
        profile = Profile.create(profile_params)
        if user.valid?
            render :json => {profile}, status: :created
        else
            render json: {"errors:" => "Invalid Credentials"}
        end
    end

    private

    def profile_params
        params.permit(:user_id, :image, :favorited_id, :fav_actor, :username, :fav_timeperiod, :fav_region)
    end

    def user_params
        params.permit(:email, :password)
    end
end
