module SessionsHelper

  def log_in(user)
    session[:user_id] = user.id
  end

  def admin_user
    @admin_user ||= User.find_by(id: session[:user_id])
  end

end
