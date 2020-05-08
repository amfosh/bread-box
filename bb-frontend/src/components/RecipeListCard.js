import React from 'react'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const RecipeListCard = ({ recipe }) => (
    <div className="card"><Link to={`/recipes/${recipe.id}`}>
        <h4>{recipe.attributes.label}</h4></Link>
        <p><img src={ recipe.attributes.image } width="300" height = "300" alt='bread'/></p><LikeButton/></div>
)
export default RecipeListCard;
