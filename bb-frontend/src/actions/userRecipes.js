import { resetRecipeForm } from './recipeForm' 

export const setUserRecipes = recipes => {
    return {
        type: "SET_USER_RECIPES",
        recipes
    }
}

export const clearRecipes = () => {
    return {
        type: "CLEAR_RECIPES",
    }
}

export const addRecipe = recipe => {
    return {
        type: "ADD_RECIPE",
        recipe
    }
}


export const updateRecipeSuccess = recipe => {
    return {
        type: "UPDATE_RECIPE",
        recipe
    }
}

export const deleteRecipeSuccess = recipeId => {
    return {
        type: "DELETE_RECIPE",
        recipeId
    }
}

export const getUserRecipes = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/recipes", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
            alert(res.error)
        } else { 
            dispatch(setUserRecipes(res.data))
        } 
    })
    .catch(console.log)
    }
}

export const createRecipe = (recipeData, history) => {
    return dispatch => {
        const sendableRecipeData = {
            label: recipeData.label,
            ingredient_lines: recipeData.ingredientLines,
            directions: recipeData.directions,
            image: recipeData.image,
            user_id: recipeData.userId
        }
        return fetch("http://localhost:3000/api/v1/recipes", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableRecipeData)
        })
            .then(r => r.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                dispatch(addRecipe(res.data))
                dispatch(resetRecipeForm())
                history.push(`/recipes/${res.data.id}`)
            }
        })
            .catch(console.log)
    }
}

export const updateRecipe = (recipeData, history) => {
    return dispatch => {
        const sendableRecipeData = {
            label: recipeData.label,
            ingredient_lines: recipeData.ingredientLines,
            directions: recipeData.directions,
            image: recipeData.image,
            // user_id: recipeData.userId
        }
        return fetch(`http://localhost:3000/api/v1/recipes/${recipeData.recipeId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableRecipeData)
        })
            .then(r => r.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                dispatch(updateRecipeSuccess(res.data))
                // dispatch(resetRecipeForm())
                history.push(`/recipes/${res.data.id}`)
            }
        })
            .catch(console.log)
    }
}

export const deleteRecipe = (recipeId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/recipes/${recipeId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(res => {
          if (res.error) {
            alert(res.error)
          } else {
            dispatch(deleteRecipeSuccess(recipeId))
            history.push(`/recipes`)
          }
        })
        .catch(console.log)
  
    }
  
  }