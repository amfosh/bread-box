// //container
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const RecipeList = props => {

    const bread = require('../bread-default.jpg');

    const recipeCards = props.recipes.length > 0 ?
    props.recipes.map(r => (<div className="card" key={r.id}>
        <Link to={`/recipes/${r.id}`}>
            <h4>{r.attributes.label}</h4></Link>
            <p><img src={r.attributes.image.length > 0 ? r.attributes.image : bread } width="300" height = "300" alt='bread'/></p><br/></div>)) : null
    return recipeCards 
}

const mapStateToProps = state => {
    return {
        recipes: state.userRecipes
    }

}

export default connect(mapStateToProps)(RecipeList)