import React from 'react'
import { updateRecipeForm } from '../actions/recipeForm'
import { connect } from 'react-redux'

const RecipeForm = ({ formData, userId, updateRecipeForm, handleSubmit, editMode, recipe }) => {

  const { label, ingredientLines, directions, image } = formData

    const handleChange = event  => {
        const { name, value } = event.target
        updateRecipeForm(name, value)
    }

    return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
        <input 
          name="label"
          onChange={handleChange}
          placeholder="label"
          value={label}
        /><br/>
        <textarea 
          name="ingredientLines"
          onChange={handleChange}
          placeholder="ingredient lines"
          value={ingredientLines}
          
        /><br/>
        <textarea 
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
          value={editMode ? "Update Recipe" : "Create Recipe"}
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


export default connect(mapStateToProps, { updateRecipeForm })(RecipeForm);
