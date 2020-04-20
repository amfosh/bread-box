import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    return (
        recipe ?
        <div>
            <h2>{recipe.attributes.label}</h2>
            <p>{recipe.attributes.image}</p>
            <p>{recipe.attributes.ingredient_lines}</p>
            <p>{recipe.attributes.directions}</p>
            <Link to={`/recipes/${recipe.id}/edit`}>Edit Recipe</Link>
        </div> :
        <p>Hello</p>
    )
}

export default RecipeCard