Rails.application.routes.draw do
  namespace :api do
    get 'posts/show'
  end

  namespace :api do
    get 'posts/edit'
  end

  namespace :api do
    get 'posts/destroy'
  end

  namespace :api do
    get 'posts/create'
  end

  namespace :api do
    get 'posts/—skip-routes'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
