import { DELETE_POST, GET_POSTS,CREATE_POST, UPDATE_POST } from "../types/postsTypes";

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
        case DELETE_POST:
            return{
                ...state,
                posts:state.posts.filter(post => post.id !== action.payload)
            }
        case CREATE_POST:
            return{
                ...state,
                posts:[...state.posts,action.payload]
            }
        case UPDATE_POST:
            return{
                ...state,
                // eslint-disable-next-line
                posts:state.posts.map(post => {
                    if(post.id === action.payload.id){
                        post = action.payload;
                    }
                })
            }
        default:
            return state
    }
}