import React from 'react'

const RecipeCard = ({ recipe }) => {
    return (
        <div>{recipe.attributes.label}
        {recipe.attributes.image}
        {recipe.attributes.yield}
        {recipe.attributes.lines}</div>
    )
}

export default RecipeCard