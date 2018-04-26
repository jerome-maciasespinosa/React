import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expireationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expireationTime * 1000)
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        // ... Authentication axios
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB7vUKj-C98j2Jt5FK05zXOS2IML3gb_Wg';
        if (!isSignup){
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB7vUKj-C98j2Jt5FK05zXOS2IML3gb_Wg'
        }

        axios.post(url, authData)
        .then((response) => {
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch((err) => {
            console.log(err);
            dispatch(authFail(err.response.data.error));
        })
    }
}


export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}