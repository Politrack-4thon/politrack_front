import axios from 'axios';

export const API = axios.create({
  baseURL: '백엔드 url 적는 부분',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
