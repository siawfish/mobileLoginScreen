import firebase from '../../firebase/fb_confiq'

export function signup(email, pass){
    return async (dispatch)=>{
        try {
            const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email,pass)
            dispatch({
                type:"SignupSuccess",
                user
            })
        } catch(err){
            dispatch({
                type:'SignupErr',
                err:err.message
            })
        }
    }
}

export function signin(email, pass){
    return async (dispatch)=>{
        try {
            const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email,pass)
            dispatch({
                type:"SignupSuccess",
                user
            })
        } catch(err){
            dispatch({
                type:'SigninErr',
                err:err.message
            })
        }
    }
}

export function signupErr(err){
    return {
        type:"SignupErr",
        err
    }
}

export function signinErr(err){
    return {
        type:"SigninErr",
        err
    }
}