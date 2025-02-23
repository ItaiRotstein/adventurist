import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
    
//--Get posts--
export const getPosts = async () => {
    const response = await axios.get(`${API_URL}/post`);
    return await response.data;
};

//--Get post by ID--
export const getPostById = async (_id) => {
    const response = await axios.get(`${API_URL}/post/${_id}`);
    return await response.data;
};

//--Add comment to post--
export const addCommentToPost = async (postId, commentData) => {
    const response = await axios.post(`${API_URL}/post/${postId}/comment`, {commentData});
    return await response.data;
};