import React from 'react'
import { connect } from 'react-redux'
import RecipeListCard from '../components/RecipeListCard';
import SearchBar from "../components/SearchBar";

const RecipeList = props => (
    <div>
        <div className="search">
            <SearchBar/>
        </div>
        {props.recipes.map(recipe => (
            <RecipeListCard 
            key={recipe.id}
            recipe={recipe} />))
        }
    </div>
)

const mapStateToProps = state => {
    return {
        // recipes: state.userRecipes
        recipes: state.userRecipes.filter(
            r =>
              r.attributes.label.toLowerCase().includes(state.searchText.toLowerCase())
            )
        };
    };

export default connect(mapStateToProps)(RecipeList)