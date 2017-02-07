class SessionsController < ApplicationController
  def new
  end
  def create
    user = user.find_by(email: params[:session][:email].downcase)
      if user && user.authenticate(params[:session][:password])
        log_in user
      else
        flash.now[:danger] = "Invalid e-mail and/or password"
      render 'new'
    end
  end
  def destroy
    log_out
    redirect_to root_url
  end
end
