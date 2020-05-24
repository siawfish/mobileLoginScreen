let initState = {
    status:false,
    user:'',
    err:{
        register:'',
        login:''
    }
}

const authReducer = (state=initState, action)=>{
    switch(action){
        default:
            return state
    }
}

export default authReducer