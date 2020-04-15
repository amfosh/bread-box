class Api::V1::RecipesController < ApplicationController

    # GET /users
  def index
    @recipes = Recipe.all

    render json: @recipes, status: 200
  end

  # # GET /users/1
  def show
    render json: @recipe, status: 200
  end

#   # POST /users
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
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def recipe_params
      params.require(:recipe).permit(:uri, :label, :image, :source, :yield, :ingredient_lines)
    end
end
