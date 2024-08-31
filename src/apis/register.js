import axios from 'axios';
import { Url } from './constants';
console.log("Backend URL:", Url);
const userSignup = async (userData) => {
    try {
        const response = await axios.post(`${Url}/register`, userData, {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error during user signup:', error.response?.data || error.message);
    }
};
const verifyUser = async (token) => {
    try {
        const response = await axios.post(`${Url}/register/verify`, { token });
        return response.data;
    } catch (error) {
        console.error('Verification error:', error.response?.data || error.message);
        return { error: error.response?.data || 'Verification failed. Please try again.' };
    }
};

export {userSignup, verifyUser};