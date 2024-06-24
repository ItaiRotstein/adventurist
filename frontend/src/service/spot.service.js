import axios from 'axios';

const API_URL = (import.meta.env.VITE_NODE_ENV === 'production')
    ? '/api'
    : 'http://localhost:3000/api';
    
//--Get spots--
export const getSpots = async (type) => {
    const config = {
        params: type ? { type } : {}
    };
    const response = await axios.get(`${API_URL}/spot`, config);
    return await response.data;
};

//--Get spot by ID--
export const getSpotById = async (_id) => {
    const response = await axios.get(`${API_URL}/spot/${_id}`);
    return await response.data;
};

//--Get similar spots--
export const getSimilarSpots = async (type) => {
    const response = await axios.get(`${API_URL}/spot/type/${type}`);
    return await response.data;
};

//--Get search results--
export const getSearchResults = async (term, type, region) => {
    const config = {
        params: {
            ...(term && { term }),
            ...(type && { type }),
            ...(region && { region })
        }
    };
    const response = await axios.get(`${API_URL}/spot/search`, config);
    return await response.data;
};

//--Get all types--
export const getAllTypes = async () => {
    const response = await axios.get(`${API_URL}/spot/types`);
    return await response.data;
};
