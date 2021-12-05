import axios from "axios";
import { DELETE_POST, GET_POSTS,CREATE_POST ,UPDATE_POST} from "../types/postsTypes";

export const get_posts = () => dispatch =>{
    axios.get('http://localhost:8000/post/')
    .then(res=>(
        dispatch({
            type : GET_POSTS,
            payload : res.data
        })
    )).catch(err=>console.log(err))
}

export const delete_post = (id) => dispatch =>{
    axios.delete(`http://localhost:8000/post/delete/${id}/`)
    .then(res=>(
        dispatch({
            type : DELETE_POST,
            payload:id
        })
    )).catch(err=>console.log(err))
}
export const create_post=(post) => dispatch =>{
    axios.post(`http://localhost:8000/post/create/`,post)
    .then(res=>(
        dispatch({
            type: CREATE_POST,
            payload:res.data
        })
    ))
}

export const update_post =(id,post) => async(dispatch) =>{
    axios.put(`http://localhost:8000/post/update/`,id,post)
    .then(res => (
        dispatch({
            type : UPDATE_POST,
            payload : post
        })
    )).catch(err => console.log(err))
}