class Api::V1::RecipesController < ApplicationController

  def index
    if logged_in?

    recipes = current_user.recipes

    render json: RecipeSerializer.new(recipes)
    else 
      render json: {
        error: "You must be logged in to see that!"
      }
    end
  end

  def show
    render json: @recipe, status: 200
  end

  def create
    recipe = Recipe.new(recipe_params)
    # recipe.image ||= "../assets/images/bread-default.jpg"

    if recipe.save
      render json: recipe, status: :created
    else
      resp = {
        error: recipe.errors.full_messages.to_sentence
      }
      render json: recipe.errors, status: :unprocessable_entity
    end
  end


#   def create
#     @recipe = Recipe.new(recipe_params)

#     if @recipe.save
#       render json: @recipe, status: :created, location: @recipe
#     else
#       render json: @recipe.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /users/1
#   def update
#     if @recipe.update(recipe_params)
#       render json: @recipe
#     else
#       render json: @recipe.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /users/1
#   def destroy
#     @recipe.destroy
#   end

  private
  
    # Use callbacks to share common setup or constraints between actions.
    # def set_recipe
    #   @recipe = Recipe.find(params[:id])
    # end

    # Only allow a trusted parameter "white list" through.
    def recipe_params
      params.require(:recipe).permit(:label, :image, :directions, :ingredient_lines, :user_id)
    end
end
