const initialState = [] 

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_RECIPES":
            return action.recipes
        case "ADD_RECIPE":
            return state.concat(action.recipe)
        case "UPDATE_RECIPE":
            return state.map(recipe => recipe.id === action.recipe.id ? action.recipe : recipe)
        case "DELETE_RECIPE":
            console.log("action.recipeId is ", action.recipeId)
            return state.filter(recipe => recipe.id === action.recipeId ? false : true)
        case "CLEAR_RECIPES":
            return initialState
        default:
            return state
    }
}