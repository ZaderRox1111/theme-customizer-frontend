import axios from 'axios';

export default axios.create({
    baseURL: "http://104.168.204.146:8000/server",
    validateStatus: () => {
        return true;
    }
});
