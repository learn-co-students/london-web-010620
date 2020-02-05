Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :bloggers, only: [:show]
  resources :posts, except: [:index,:delete]
  resources :destinations, only: [:show]

  get 'posts/like/:id', to: 'posts#like'
end
