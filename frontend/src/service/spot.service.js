import axios from 'axios';

const API_URL = (import.meta.env.VITE_NODE_ENV === 'production')
    ? '/api'
    : 'http://localhost:3000/api';
    
console.log('Frontend Environment:', import.meta.env.VITE_NODE_ENV);

//--Get spots--
export const getSpots = async (kind) => {
    const config = {
        params: kind ? { kind } : {}
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
export const getSimilarSpots = async (kind) => {
    const response = await axios.get(`${API_URL}/spot/kind/${kind}`);
    return await response.data;
};

//--Get search results--
export const getSearchResults = async (term, kind, region) => {
    const config = {
        params: {
            ...(term && { term }),
            ...(kind && { kind }),
            ...(region && { region })
        }
    };
    const response = await axios.get(`${API_URL}/spot/search`, config);
    return await response.data;
};

//--Get all kinds--
export const getAllKinds = async () => {
    const response = await axios.get(`${API_URL}/spot/kinds`);
    return await response.data;
};
