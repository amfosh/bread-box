import React from 'react'
import { updateRecipeForm } from '../actions/recipeForm'
import { createRecipe } from '../actions/userRecipes'
import { connect } from 'react-redux'


const RecipeForm = ({ formData, userId , history, updateRecipeForm, createRecipe }) => {

  const { label, ingredientLines, directions, image } = formData

    const handleChange = event  => {
        const { name, value } = event.target
        updateRecipeForm(name, value)
    }

    const handleSubmit = event => {
      event.preventDefault()
      createRecipe({
        ...formData,
        userId
      }, history )
  }

    return (
    <form onSubmit={handleSubmit}>
        <input 
          name="label"
          onChange={handleChange}
          placeholder="label"
          value={label}
        /><br/>
        <input 
          name="ingredientLines"
          onChange={handleChange}
          placeholder="ingredient lines"
          value={ingredientLines}
        /><br/>
        <input 
          name="directions"
          onChange={handleChange}
          placeholder="directions"
          value={directions}
        /><br/>
        <input 
          name="image"
          onChange={handleChange}
          placeholder="image"
          value={image}
        /><br/>
        <input 
          type="submit"
          value="Create Recipe"
        />
    </form>
)};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.recipeForm,
      userId
    }
}


export default connect(mapStateToProps, { updateRecipeForm, createRecipe })(RecipeForm);
