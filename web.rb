require 'sinatra'


get '/' do
	File.read(File.join('public', 'index.html'))
end

#get '/about' do
#	File.read(File.join('public', 'about.html'))
#end
#
#get '/quote' do
#	File.read(File.join('public', 'quote.html'))
#end

get '/:url' do |u|
	File.read(File.join('public', '#{u}'))
end

get '/logo.png' do
	File.read(File.join('public/assets/img', 'logo.png'))
end