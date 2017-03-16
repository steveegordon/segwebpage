module ApplicationHelper

  def full_title(page_title = "")
    base_title = "SteveEGordon.com"
    if page_title.empty?
      base_title
    else
      "#{page_title} | #{base_title}"
    end
  end
  def cover(page_title = "")
    unless page_title.empty?
    page_title.downcase!.gsub!(" ", "_")
    page_title
  end
  end
  def post_thumb(x)
    @post = Post.find(x)
    @position = @post.image.url.rindex('/') + 1
    url = @post.image.url.insert(@position, 'sml_')
    return url
  end
end
