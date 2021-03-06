import React from 'react'
import { createRecipe } from '../actions/userRecipes'
import RecipeForm from '../components/RecipeForm'
import { connect } from 'react-redux'


const NewFormContainer = ({ history, createRecipe }) => {

    const handleSubmit = (formData, userId) => {
        createRecipe({
          ...formData, 
          userId
        }, history )
    }
    return <RecipeForm history={history} handleSubmit={handleSubmit}/>
  }

export default connect(null, { createRecipe })(NewFormContainer)