import axios from 'axios';

const api = axios.create({
  baseURL: 'http://15.207.98.62:8200/api',
});

export default api;
