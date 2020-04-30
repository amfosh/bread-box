import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { getUserRecipes, clearRecipes } from './userRecipes'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const login = (credentials, history) => {

    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
            alert(res.error)
        } else { 
            dispatch(setCurrentUser(res.data))
            dispatch(getUserRecipes())
            dispatch(resetLoginForm())
            history.push('/')
        } 
    })
    .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentUser())
        dispatch(clearRecipes())
        return fetch('http://localhost:3000/api/v1/logout', {
        credentials: "include",
        method: "DELETE"
    })
}
}

export const getCurrentUser = () => {

    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
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
            dispatch(setCurrentUser(res.data))
            dispatch(getUserRecipes())
        } 
    })
    .catch(console.log)
    }
}

export const signup = (credentials, history) => {

    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
            alert(res.error)
        } else { 
            dispatch(setCurrentUser(res.data))
            dispatch(getUserRecipes())
            dispatch(resetSignupForm())
            history.push('/')
        } 
    })
    .catch(console.log)
    }
}