export const updateRecipeForm = (name, value) => {
    return {
        type: "UPDATE_RECIPE_FORM",
        formData: { name, value }
    }
}

// export const resetRecipeForm = () => {
//     return {
//         type: "RESET_RECIPE_FORM",
//     }
// }