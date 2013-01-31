require 'sinatra'


get '/' do
	File.read(File.join('public', 'index.html'))
end

get '/about' do
	File.read(File.join('public', 'about.html'))
end

get '/quote' do
	File.read(File.join('public', 'quote.html'))
end

get '/logo.png' do
	File.read(File.join('public/assets/img', 'logo.png'))
end

get '/assets/css/style.css' do
	File.read(File.join('public/assets/css', 'style.css'))
end
get '/assets/css/bootstrap.min.css' do
	File.read(File.join('public/assets/css', 'bootstrap.min.css'))
end
get '/assets/css/bootstrap-responsive.min.css' do
	File.read(File.join('public/assets/css', 'bootstrap-responsive.min.css'))
end

get '/assets/js/jquery.js' do
	File.read(File.join('public/assets/js', 'jquery.js'))
end
get '/assets/js/bootstrap.plugins.js'
	File.read(File.join('public/assets/js', 'boostrap.plugins.js'))
end