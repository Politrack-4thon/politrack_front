import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://43.200.133.223:5174',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
