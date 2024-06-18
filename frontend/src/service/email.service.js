import axios from 'axios';

const API_URL = (import.meta.env.VITE_NODE_ENV === 'production')
  ? '/api'
  : 'http://localhost:3000/api';

//--Send Contact Email--
export const sendContactEmail = async (formData) => {

  const config = {
    params: { formData }
  };
  try {
    const response = await axios.get(`${API_URL}/email`, config);
    // Return both data and status
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error("Error sending contact email:", error);
    // Return error status and message
    return { data: error.response?.data, status: error.response?.status };
  }
};