import { types } from "../types/types";


export const authReducer = (state = {}, action) => {
    switch(action.type) {
        case types.authLogin: {
            const token=action.payload;
          
            return {
               
                token,
            };
        }
        case types.authLogout: {
            return {};
        }
       
        case types.authError: {
            return { ...state, msnerror: action.payload};
        }
        default: {
            return state;
        }
    }
};