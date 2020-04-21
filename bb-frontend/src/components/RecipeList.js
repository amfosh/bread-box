// //container
import React from 'react'
// import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const RecipeList = props => {
    
    const recipeCards = props.recipes.length > 0 ?
    props.recipes.map(r => (<div key={r.id}>
        <Link to={`/recipes/${r.id}`}>
            <p>{r.attributes.label}</p></Link>
            <p><img src={r.attributes.image} alt="bread"/></p><br/></div>)) : null
    return recipeCards 
}

const mapStateToProps = state => {
    return {
        recipes: state.userRecipes
    }

}

export default connect(mapStateToProps)(RecipeList)