class Api::V1::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]

  def index
    if logged_in?

    @recipes = current_user.recipes

    render json: RecipeSerializer.new(@recipes)
    else 
      render json: {
        error: "You must be logged in to see that!"
      }
    end
  end

  def show
    render json: @recipe
  end

  def create
    @recipe = Recipe.new(recipe_params)
    # recipe.image ||= "../assets/images/bread-default.jpg"

    if @recipe.save
      render json: RecipeSerializer.new(@recipe)
    else
      resp = {
        error: recipe.errors.full_messages.to_sentence
      }
      render json: recipe.errors, status: :unprocessable_entity
    end
  end

  def update
    if @recipe.update(recipe_params)
      render json: RecipeSerializer.new(@recipe), status: :ok
    else
      resp = {
        error: @recipe.errors.full_messages.to_sentence
      }
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end



  private

    def set_recipe
      @recipe = Recipe.find(params[:id])
    end
  
    def recipe_params
      params.require(:recipe).permit(:label, :image, :directions, :ingredient_lines, :user_id)
    end
end
