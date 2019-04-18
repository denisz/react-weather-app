import axios from 'axios';
import { CurlService } from "./curl.service";

const httpClient = axios;

httpClient.interceptors.response.use(
    (res) => {
        console.log('%c Request Success:', 'color: #4CAF50; font-weight: bold', res);
        return res;
    },

    (err) => {
        console.log('%c Request Error:', 'color: #EC6060; font-weight: bold', err);
        return Promise.reject(err);
    }
);

httpClient.interceptors.request.use(req => {
    const curl = new CurlService(req);
    console.log('%c Request:', 'color: #4CAF50; font-weight: bold', curl.generateCommand());
    return req;
});

export {httpClient}