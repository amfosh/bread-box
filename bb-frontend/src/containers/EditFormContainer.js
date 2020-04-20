import React from 'react'
import { updateRecipe } from '../actions/userRecipes'
import { setDataForEdit } from '../actions/recipeForm'
import RecipeForm from '../components/RecipeForm'
import { connect } from 'react-redux'


class EditFormContainer extends React.Component { 
    componentDidMount(){
        this.props.recipe && this.props.setDataForEdit(this.props.recipe)
    }

    handleSubmit = (formData) => {
      const { updateRecipe, recipe, history } = this.props
        updateRecipe({
          ...formData, 
          recipeId: recipe.id,
        }, history)
    }

    render() {
        const { history, recipe } = this.props
        const recipeId = recipe ? recipe.id : null
        return <RecipeForm editMode handleSubmit={this.handleSubmit}/>
    }
  };

export default connect(null, { updateRecipe, setDataForEdit })(EditFormContainer)