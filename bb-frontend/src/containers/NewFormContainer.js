import React from 'react'
import { createRecipe } from '../actions/userRecipes'
import { connect } from 'react-redux'


const NewFormContainer = ({}) => (
    const handleSubmit = event, label, ingredientLines, directions, image, userId, history => {
        event.preventDefault()
        createRecipe({
          label, 
          ingredientLines, 
          directions, 
          image, 
          userId
        }, history )
    }
    const hs
    <RecipeForm history={history} handleSubmit={handleSubmit}/>
)

export default NewFormContainer