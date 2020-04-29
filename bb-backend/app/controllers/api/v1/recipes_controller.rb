class Api::V1::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]

  def index
    if logged_in?

    recipes = current_user.recipes

    render json: RecipeSerializer.new(recipes.order(created_at: :desc))
    else 
      render json: {
        error: "You must be logged in to see that!"
      }
    end
  end

  def show
    render json: recipe
  end

  def create
    recipe = current_user.recipes.build(recipe_params)

    if recipe.save
      render json: RecipeSerializer.new(recipe), status: 200
    else
      resp = {
        error: recipe.errors.full_messages.to_sentence
      }
      render json: resp, status: 400
    end
  end

  def update
    if recipe = Recipe.find(params[:id])
      recipe.update(recipe_params)
      render json: RecipeSerializer.new(recipe), status: 200
    else
      resp = {
        error: recipe.errors.full_messages.to_sentence
      }
      render json: recipe.errors, status: 400
    end
  end

  def destroy
    if @recipe.destroy
      render json: { data: "Recipe deleted." } , status: 200
    else
      resp = {
        error: "Recipe not found."
      }
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end


  private

    def set_recipe
      @recipe = Recipe.find(params[:id])
    end
  
    def recipe_params
      params.require(:recipe).permit(:label, :image, :directions, :ingredient_lines)
    end
end
