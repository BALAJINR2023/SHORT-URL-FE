import axios from 'axios';
import { Url } from './constants';

const userSignIn = async (userData) => {
    try {
        const response = await axios.post(`${Url}/login`, userData, {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error during user signup:', error);
    }
};

export {userSignIn};