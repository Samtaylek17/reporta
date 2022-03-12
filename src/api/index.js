import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || 'http://178.63.13.157:8090/mock-api/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
