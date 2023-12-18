import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://43.200.133.223/',

  headers: {
    'Content-Type': 'application/json',
  },
});