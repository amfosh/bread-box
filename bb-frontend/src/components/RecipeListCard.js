import React from 'react'
import bread from '../bread-default.jpg'
import { Link } from 'react-router-dom'

const RecipeListCard = ({ recipe }) => (
    <div className="card"><Link to={`/recipes/${recipe.id}`}>
        <h4>{recipe.attributes.label}</h4></Link>
        <p><img src={recipe.attributes.image.length > 0 ? recipe.attributes.image : bread } width="300" height = "300" alt='bread'/></p><br/></div>
)
export default RecipeListCard;
