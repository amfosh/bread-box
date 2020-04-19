import React from 'react'

const RecipeCard = ({ recipe }) => {
    return (
        <div>{recipe.attributes.label}
        {recipe.attributes.image}
        {recipe.attributes.ingredientLines}
        {recipe.attributes.directions}</div>
    )
}

export default RecipeCard