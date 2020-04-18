// //container
import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'

const RecipeList = props => {
    const recipeCards = props.recipes.length > 0 ?
    props.recipes.map(r => <RecipeCard recipe={r} key={r.id}/>) : null
    return (
        recipeCards 
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.userRecipes
    }

}

export default connect(mapStateToProps)(RecipeList)