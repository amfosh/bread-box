export const updateRecipeForm = (name, value) => {
    const formData = { name, value } 
    return {
        type: "UPDATE_RECIPE_FORM",
        formData
    }
}

// export const resetRecipeForm = () => {
//     return {
//         type: "RESET_RECIPE_FORM",
//     }
// }