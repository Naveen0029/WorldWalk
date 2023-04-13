import { ADDFORMDATA, POST_FAILURE } from "./constant"
const initialData = {
    status: 0,
    message: 'Success'
}
export const addFormData = (state = initialData, action) => {
    console.log('this is action',action.data);
    switch(action.type){
        case ADDFORMDATA:
            return {
                ...state,
                status: 200,
                message: 'Your Response Is Submitted'
            }
        case POST_FAILURE:
            return {
                ...state,
                status: 500,
                message: action.data?.message
            }
        default:
            return state;
    }
}
