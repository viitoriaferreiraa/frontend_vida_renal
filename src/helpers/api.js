import axios from 'axios';

export const apiBaseUrl = import.meta.env.VITE_APP_API_URL;

export const api = axios.create({
  baseURL: apiBaseUrl,
});
