# Load the Rails application.
require File.expand_path('../application', __FILE__)

if ENV['RAILS_ENV'] == 'production'  # don't bother on dev
  ENV['GEM_PATH'] = '/home/USERNAME/.gems' #+ ':/usr/lib/ruby/gems/1.8'  # Need this or Passenger fails to start
end

require File.join(File.dirname(__FILE__), 'boot')

# Initialize the Rails application.
Rails.application.initialize!
