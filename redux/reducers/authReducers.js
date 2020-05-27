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
                status:true,
                user:action.user,
                err:{
                    register:'',
                    login:''
                }
            }
        case "SignupErr":
            return {
                ...state,
                err:{
                    register:action.err,
                    login:''
                }
            }
        case "SigninErr":
            return {
                ...state,
                err:{
                    login:action.err,
                    register:''
                }
            }
        case "LoggedOut":
            return {
                status:false,
                user:null,
                err:{
                    register:'',
                    login:''
                }
            }
        default:
            return state
    }
}

export default authReducer