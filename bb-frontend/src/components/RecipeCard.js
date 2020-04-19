import React from 'react'

const RecipeCard = ({ recipe }) => {
    return (
        recipe ?
        <div>
            <h2>{recipe.attributes.label}</h2>
            <p>{recipe.attributes.image}</p>
            <p>{recipe.attributes.ingredient_lines}</p>
            <p>{recipe.attributes.directions}</p>
        </div> :
        <p>Hello</p>
    )
}

export default RecipeCard