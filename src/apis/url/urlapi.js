import axios from 'axios';
import { Url } from '../constants';


export const shortenUrl = async (originalUrl) => {
    try {
        const response = await axios.post(`${Url}/url-shortener/shorten`, { originalUrl });
        return response.data;
    } catch (error) {
        console.error('Error shortening URL:', error);
        throw error;
    }
};

export const getOriginalUrl = async (shortUrl) => {
    try {
        const response = await axios.get(`${Url}/url-shortener/${shortUrl}`);
        return response.data;
    } catch (error) {
        console.error('Error retrieving original URL:', error);
        throw error;
    }
};
export const fetchUrls = async () => {
    try {
        const response = await axios.get(`${Url}/stic/urls`);
        return response.data;
    } catch (error) {
        console.error('Error fetching URLs:', error);
        throw error;
    }
};

export const fetchStats = async () => {
    try {
        const response = await axios.get(`${Url}/stic/stats`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stats:', error);
        throw error;
    }
};