require 'sinatra'


get '/' do
	File.read(File.join('public', 'maintenance.html'))
end

get '/about' do
	File.read(File.join('public', 'about.html'))
end

get '/quote' do
	File.read(File.join('public', 'quote.html'))
end


