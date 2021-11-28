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
 *
 * @returns data user informations endpoints to API for the async function in ProfilePage
 */
export const getUserInfos = id => baseURL.get(`/${id}`);

/**
 * Make request to get the user activity with a given ID and endpoints
 * @param {number} id
 *
 * @returns data activity endpoints to API for the async function in ProfilePage
 */
export const getUserActivity = id => baseURL.get(`/${id}/activity`);

/**
 * Make request to get the user average sessions with a given ID and endpoints
 * @param {number} id
 *
 * @returns data average sessions endpoints to API for the async function in ProfilePage
 */
export const getUserAverageSessions = id =>
    baseURL.get(`/${id}/average-sessions`);

/**
 * Make request to get the user performance with a given ID and endpoints
 * @param {number} id
 *
 * @returns {Promise} data performance endpoints to API for the async function in ProfilePage
 */
export const getUserPerformance = id => baseURL.get(`/${id}/performance`);
