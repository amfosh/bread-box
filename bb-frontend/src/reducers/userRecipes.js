export default (state = [], action) => {
    switch (action.type) {
        case "SET_USER_RECIPES":
            return action.recipes
        case "ADD_RECIPE":
            return state.recipes.concat(action.recipes)
        case "CLEAR_RECIPES":
            return []
        default:
            return state
    }
}