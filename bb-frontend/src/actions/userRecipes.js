export const setUserRecipes = recipes => {
    return {
        type: "SET_USER_RECIPES",
        recipes
    }
}

export const clearRecipes = recipes => {
    return {
        type: "CLEAR_RECIPES",
    }
}

export const getUserRecipes = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/recipes", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
            alert(res.error)
        } else { 
            dispatch(setUserRecipes(res.data))
        } 
    })
    .catch(console.log)
    }
}