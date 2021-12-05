import { GET_POSTS } from "../types/postsTypes";

const initialState = {
    posts : []
}

// eslint-disable-next-line
export default function(state=initialState,action){
    switch(action.type){
        case GET_POSTS:
            return{
                ...state,
                posts:action.payload
            }
        default:
            return state
    }
}