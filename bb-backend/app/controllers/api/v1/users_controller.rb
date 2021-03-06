class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
    user_json = UserSerializer.new(user).serialized_json
    render json: user_json
  end

  def create
    user = User.new(user_params)

    if user.save
      session[:user_id] = user.id
      render json: UserSerializer.new(user), status: 200
    else
      resp = {
        error: user.errors.full_messages.to_sentence
      }
      render json: user.errors, status: 400
    end
  end

  private
    def set_user
      user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
