import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const authAPI = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login/`, { email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  register: async (name, email, password, password_confirmation) => {
    try {
      const response = await axios.post(`${API_URL}/register/`, { name, email, password , password_confirmation});
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  logout: async () => {
    try {
      // const response = await axios.post(`${API_URL}/logout/`);
      // If your backend has a logout endpoint
      const response = await axios.post(`${API_URL}/logout/`);
      // return response.data;
      if (response.data == true) {
        return { success: true };
      }
      
      // For frontend-only logout (clearing tokens)
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      // error.response?.data || error.message;
    }
  }
};