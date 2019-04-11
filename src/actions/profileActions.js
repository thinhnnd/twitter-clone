import axios from 'axios'
import {
    GET_PROFILE,
    LOAD_PROFILE,
    GET_POSTS,
    LOADING_POSTS
} from '../constants'

export const getUserProfile = (userId) => dispatch => {
    dispatch(loadProfile())
    axios.get(`http://localhost:5000/api/users/${userId}`)
        .then( res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const getPostsByUserId = (userId) => dispatch => {
    dispatch(loadPosts());
    axios.get(`http://localhost:5000/api/posts/${userId}`)
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const loadProfile = () => {
    return {
        type: LOAD_PROFILE
    }
}

export const loadPosts = () => {
    return {
        type: LOADING_POSTS
    }
}