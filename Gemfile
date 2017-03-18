source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'
# Use sqlite3 as the database for Active Record
# Use Sprockets for Bootstrap
gem 'sprockets-rails', :require => 'sprockets/railtie'
# Use bootstap for responsive design
gem 'bootstrap', '~> 4.0.0.alpha3.1'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'figaro'

gem 'carrierwave', '0.10.0'

gem 'mini_magick', '3.8.0'

gem 'fog', '1.32.0'

gem 'net-ssh'

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# Fixes page load issues with Jquery
gem 'jquery-turbolinks'
# bundle exec rake doc:rails generates the API under doc/api.
group :doc do
    gem 'sdoc', '~> 0.4.0'
end

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  gem 'sqlite3'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production do
  gem 'pg', '0.17.1'
  gem 'rails_12factor', '0.0.2'
  gem 'puma', '>= 2.11.1'
end

source 'https://rails-assets.org' do
# tether sets positioning for popovers
  gem 'rails-assets-tether', '>= 1.1.0'
end

