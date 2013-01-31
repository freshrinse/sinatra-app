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

get '/style.css' do
	File.read(File.join('public/assets/css/', 'style.css'))
end