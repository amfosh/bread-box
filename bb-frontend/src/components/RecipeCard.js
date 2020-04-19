import React from 'react'

const RecipeCard = ({ recipe }) => {
    return (
        <div>{recipe.attributes.label}
        {recipe.attributes.image}
        {recipe.attributes.ingredientLines}</div>
        {recipe.attributes.directions}
    )
}

export default RecipeCard