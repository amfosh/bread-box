
const initialState = {
    label: "",
    directions: "",
    ingredientLines: "",
    image: ""
}


export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_RECIPE_FORM":
            return {
            ...state,
            [action.formData.name]: action.formData.value
            }
        case "RESET_RECIPE_FORM":
            return initialState
        case "SET_DATA_FOR_EDIT":
            return action.recipeFormData
        default:
            return state
    }
}