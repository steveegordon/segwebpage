class PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    @position = @post.image.url.rindex('/') + 1
  end
  def index
    @posts = Post.all
  end
  def new
  end
  def create
    @post = Post.new(post_params)
    @post.user_id = 1
    if @post.save
    redirect_to '/posts'
  else
    render 'new'
  end
  end

  private
    def post_params
      params.require(:post).permit(:category, :image, :title, :text)
    end
end
