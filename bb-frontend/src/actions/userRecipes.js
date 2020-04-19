export const setUserRecipes = recipes => {
    return {
        type: "SET_USER_RECIPES",
        recipes
    }
}

export const clearRecipes = recipes => {
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

export const createRecipe = receipeData => {
    return dispatch => {
        const sendableRecipeData = {
            label: recipeData.label,
            directions: recipeData.directions,
            ingredient_lines: recipeData.ingredientLines,
            image: recipeData.image,
            user_id: tripData.userId
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
    }
}