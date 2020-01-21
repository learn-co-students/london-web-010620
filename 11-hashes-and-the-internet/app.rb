require 'rest-client'
require 'json'

puts "give me a character name"
char_name_search_term = gets.chomp

api_endpoint = "https://swapi.co/api/people/?search=#{char_name_search_term}"

puts 'Loading pease wait'
response = RestClient.get(api_endpoint)
response_body = JSON.parse(response.body)

def print_character_info(character)
  print("---------------------\n")
  puts character['name']
  puts character['height']
  puts character['gender']
  print('---------------------')
end

def pretty_print_all_character_info(char_hash)
  char_hash['results'].each { |character| print_character_info(character) }
end

pretty_print_all_character_info(response_body)

