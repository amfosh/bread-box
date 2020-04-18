export default (state = [], action) => {
    switch (action.type) {
        case "SET_USER_RECIPES":
            return action.recipes
        default:
            return state
    }
}