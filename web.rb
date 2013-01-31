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
	File.read(File.join('public', 'logo.png'))
end