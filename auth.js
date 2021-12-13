import { types } from '../types/types';
import { endpoint } from '../types/endPoints';

export const authAsync = (email, password) => {
    return (dispatch) => {
        fetch(endpoint.login.url,{
            
            method:endpoint.login.method,
            headers:{
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({email, password}),
        })
        .then ((response)=>{
            if (response.status===300){
                //dispatch(error("Credenciales incorrectos"));
                return;
            }
            return response.json();
            
        })
        .then (({data})=>{
            if(data){
                localStorage.setItem("token", data.serverResponse);
                //console.log(serverResponse);
                dispatch(auth(data.serverResponse));
                console.log(data);
                return;
                
            }
            dispatch(error("Credenciales incorrectos"));
        });
    };
};

/*export const authRegister=(authRegisterData)=>{
    debugger;
    return (dispatch)=>{
        fetch(endpoint.register.url,{
            
            method:endpoint.register.method,
            headers:{
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(authRegisterData),
        })
        .then ((response)=>response.json())
        .then (({serverResponse})=>{
            console.log(serverResponse);
            localStorage.setItem("token", serverResponse);
            dispatch(register(serverResponse));
        });
    };
};*/
export const authLogoutAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            localStorage.removeItem("user");
            dispatch(logout());
        }, 1000);
    }
};

/*export const register=(response)=>{
    return{
        type:types.authRegister,
        payload:response,
    };
};*/

//haciendo pruebas de git
export const auth = (token) => {
    return {
        type: types.authLogin,
        payload: token,
    };
};

export const logout = () => {
    return {
        type: types.authLogout,
        payload: null,
    };
};

export const error = (msn) => {
    return {
        type: types.authError,
        payload: msn
    }
};