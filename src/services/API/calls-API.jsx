import axios from 'axios';

/**
 * Localhost URL, this is a tempory URL.
 * @property {string} baseURL - URL to the back-end
 */
const baseURL = axios.create({
    baseURL: 'http://localhost:3000/user',
});

/**
 * Make request to get the user informations with a given ID and endpoints
 * @param {number} id
 * @param {string} endpoint
 *
 * @returns data's user informations about endpoints to API for the async function in ProfilePage
 */
export const getUserData = (id, endpoint) => baseURL.get(`/${id}/${endpoint}`);
