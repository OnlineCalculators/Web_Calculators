require 'bundler'
Bundler.require

get '/' do

  erb :index
end

get '/pythagorean' do

  erb :pythagorean
end

get '/quadratic' do

  erb :quadratic
end

get '/factorial' do

  erb :factorial
end