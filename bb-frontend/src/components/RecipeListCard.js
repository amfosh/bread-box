import React from 'react'
import { Link } from 'react-router-dom'

const RecipeListCard = ({ recipe }) => (
    <div className="card"><Link to={`/recipes/${recipe.id}`}>
        <h4>{recipe.attributes.label}</h4></Link>
        <p><img src={ recipe.attributes.image } width="300" height = "300" alt='bread'/></p><br/></div>
)
export default RecipeListCard;
