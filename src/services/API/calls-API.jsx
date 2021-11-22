import axios from 'axios';

const baseURL = axios.create({
    baseURL: 'http://localhost:3000/user',
});

export const getUserInfos = id => baseURL.get(`/${id}`);
export const getUserActivity = id => baseURL.get(`/${id}/activity`);
export const getUserAverageSessions = id =>
    baseURL.get(`/${id}/average-sessions`);
export const getUserPerformance = id => baseURL.get(`/${id}/performance`);
