import React from 'react'
import { connect } from 'react-redux'
import RecipeListCard from '../components/RecipeListCard';


const RecipeList = props => (
    <div className="card">
        {props.recipes.map(recipe => (
            <RecipeListCard 
            key={recipe.id}
            recipe={recipe} />))
        })}
    </div>
)

const mapStateToProps = state => {
    return {
        recipes: state.userRecipes
    }

}

export default connect(mapStateToProps)(RecipeList)