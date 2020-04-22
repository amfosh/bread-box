import React from 'react'
import RecipeList from './RecipeList'

const MainContainer = () => {
    return (
        <div className="MainContainer">
            <h2>Your Recipes:</h2>
            <RecipeList/>
        </div>
    )
}

export default MainContainer