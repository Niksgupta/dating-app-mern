import axios from 'axios';

const instance = axios.create({
    baseURL: "https://dating-app-mern.herokuapp.com",
})

export default instance;
