class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: current_user.posts.all
  end

  def show
    render json: @post
  end

  def update
    if @post.update(post_params)
      render json: @post
    else 
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render json: @post, status: :created
    else 
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
  end


  private 
  def set_post
    @post = current_user.posts.find(params[:id])
  end 

  def post_params
    params.require(:post).permit(:name, :body)
  end 
end

