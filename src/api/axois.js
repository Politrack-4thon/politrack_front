import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://43.200.133.223/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5173', // 클라이언트 도메인을 허용하는 설정
    'Access-Control-Allow-Credentials': 'true',
  },
  withCredentials: true,
});
