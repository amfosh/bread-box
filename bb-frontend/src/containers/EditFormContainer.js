import React from 'react'
import { updateRecipe, deleteRecipe } from '../actions/userRecipes'
import { setDataForEdit, resetRecipeForm } from '../actions/recipeForm'
import RecipeForm from '../components/RecipeForm'
import { connect } from 'react-redux'

class EditFormContainer extends React.Component { 
    componentDidMount(){
        this.props.recipe && this.props.setDataForEdit(this.props.recipe)
    }

    componentDidUpdate(prevProps){
      this.props.recipe && !prevProps.recipe && this.props.setDataForEdit(this.props.recipe)
    }

    componentWillUnmount() {
      this.props.resetRecipeForm()
    }

    handleSubmit = (formData) => {
      const { updateRecipe, recipe, history } = this.props
        updateRecipe({
          ...formData, 
          recipeId: recipe.id,
        }, history)
    }

    render() {
        const { history, deleteRecipe, recipe } = this.props
        const recipeId = recipe ? recipe.id : null
        return <>
          <RecipeForm editMode handleSubmit={this.handleSubmit}/>
          <button onClick={()=>deleteRecipe(recipeId, history)}>Delete Recipe</button>
        </>
    }
  };

export default connect(null, { updateRecipe, setDataForEdit, resetRecipeForm, deleteRecipe })(EditFormContainer)