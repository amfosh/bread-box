export const updateRecipeForm = (name, value) => {
    const formData = { name, value } 
    return {
        type: "UPDATE_RECIPE_FORM",
        formData
    }
}

export const resetRecipeForm = () => {
    return {
        type: "RESET_RECIPE_FORM",
    }
}

export const setDataForEdit = recipe => {
    const recipeFormData = {
        label: recipe.attributes.label,
        directions: recipe.attributes.directions,
        ingredientLines: recipe.attributes.ingredient_lines,
        image: recipe.attributes.image
    }
    return {
        type: "SET_DATA_FOR_EDIT",
        recipeFormData
    }
}