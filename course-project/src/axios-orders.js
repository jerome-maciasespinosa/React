import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b1a6f.firebaseio.com/'
});

export default instance;