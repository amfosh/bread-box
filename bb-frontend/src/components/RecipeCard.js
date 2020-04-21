import React from 'react'
import { Link } from 'react-router-dom'
import bread from '../bread-default.jpg'

const RecipeCard = ({ recipe }) => {
    return (
        recipe ?
        <div>
            <h2>{recipe.attributes.label}</h2>
            <p><img src={recipe.attributes.image.length > 0 ? recipe.attributes.image : bread } width="300" height = "300" alt="bread"/></p>
            <h3>Ingredients:</h3>
            <p>{recipe.attributes.ingredient_lines}</p>
            <h3>Directions:</h3>
            <p>{recipe.attributes.directions}</p>
            <Link to={`/recipes/${recipe.id}/edit`}>Edit Recipe</Link>
            <br/></div> :
        <p>No recipe found.</p>
    )
}

export default RecipeCard