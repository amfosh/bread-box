// //container
import React from 'react'
// import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const RecipeList = props => {
    const recipeCards = props.recipes.length > 0 ?
    props.recipes.map(r => (<><Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.label}</Link><br/></>)) : null
    return recipeCards 
}

const mapStateToProps = state => {
    return {
        recipes: state.userRecipes
    }

}

export default connect(mapStateToProps)(RecipeList)