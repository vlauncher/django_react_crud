import axios from "axios";
import { GET_POSTS } from "../types/postsTypes";

export const get_posts = () => dispatch =>{
    axios.get('http://localhost:8000/post/')
    .then(res=>(
        dispatch({
            type : GET_POSTS,
            payload : res.data
        })
    )).catch(err=>console.log(err))
}