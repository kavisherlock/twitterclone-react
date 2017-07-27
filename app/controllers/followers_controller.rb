class FollowersController < ApplicationController
  def random
    render json: User.who_to_follow(current_user.id)
  end

  def create
    follower = Follower.create(user_id: params[:user_id], followed_by: current_user.id)
    render json: follower
  end
end
