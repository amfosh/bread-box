const initialState = {
    label: "",
    directions: "",
    ingredient_lines: "",
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
        default:
            return state
    }
}