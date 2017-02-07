class PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
  end
  def index
    @posts = Post.all
    @recent = @posts.last(3)
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
      params.require(:post).permit(:image, :title, :text)
    end
end
