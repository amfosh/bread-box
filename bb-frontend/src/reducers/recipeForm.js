const initialState = {
    label: "",
    directions: "",
    ingredientLines: "",
    image: "../assets/images/bread-default.jpg"
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
        default:
            return state
    }
}