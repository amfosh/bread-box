import React from 'react'
import { updateRecipe } from '../actions/userRecipes'
import { setDataForEdit } from '../actions/recipeForm'
import RecipeForm from '../components/RecipeForm'
import { connect } from 'react-redux'


class EditFormContainer extends React.Component { 
    componentDidMount(){
        this.props.recipe && this.props.setDataForEdit(this.props.recipe)
    }

    handleSubmit = (event, formData, userId, history) => {
      const { updateRecipe, recipe } = this.props
      event.preventDefault()
        updateRecipe({
          ...formData, 
          recipeId: recipe.id,
          userId
        }, history )
    }

    render() {
        const { history, handleSubmit } = this.props
        return <RecipeForm editMode history={history} handleSubmit={handleSubmit}/>
    }
  };

export default connect(null, { updateRecipe, setDataForEdit })(EditFormContainer)