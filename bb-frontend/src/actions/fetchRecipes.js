// import {fetchRecipesPending, fetchRecipesSuccess, fetchRecipesError} from './recipeActions';

// function fetchRecipes() {
//     return dispatch => {
//         dispatch(fetchRecipesPending());
//         fetch('https://api.edamam.com/search?q=bread&app_id=dda883c5&app_key=467f0304c54cc387428ad8336e5231e8')
//         .then(res => res.json())
//         .then(res => {
//             if(res.error) {
//                 throw(res.error);
//             }
//             dispatch(fetchRecipesSuccess(res.recipes))
//             return res.recipes;
//         })
//         .catch(error => {
//             dispatch(fetchRecipesError(error));
//         })
//     }
// }

// export default fetchRecipes;