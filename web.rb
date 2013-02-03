require 'sinatra'

set :haml, :format => :html5

get '/' do
	File.read(File.join('public', 'index.html'))
	# haml :index
end

get '/services' do
	File.read(File.join('public', 'services.html'))
end

get '/quote' do
	File.read(File.join('public', 'quote.html'))
end


