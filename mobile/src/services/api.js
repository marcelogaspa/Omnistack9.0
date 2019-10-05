import axios from 'axios';

const api =axios.create ({
    baseURL: 'http://localhost:8448',
});

export default api;