let initState = {
    status:false,
    user:'',
    err:{
        register:'',
        login:''
    }
}

const authReducer = (state=initState, action)=>{
    switch(action.type){
        case "SignupSuccess":
            return {
                ...state,
                status:true,
                user:action.user
            }
        case "SignupErr":
            return {
                ...state,
                err:{register:action.err}
            }
        case "SigninErr":
            return {
                ...state,
                err:{login:action.err}
            }
        default:
            return state
    }
}

export default authReducer