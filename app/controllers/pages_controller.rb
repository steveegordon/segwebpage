class PagesController < ApplicationController
  def home
    @recent = Post.order("created_at desc").limit(3)
  end
  def about_me
  end
  def projects
  end
end
