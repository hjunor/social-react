import axios from "axios";
import { getToken } from "./account";

export const getApiUrl = (path) => {
    return `https://dogsapi.origamid.dev/json${path}`;
};
export const getheaders = () => {
    const token = getToken();
    if (!token) return {};

    return {
        Authorization: `Bearer ${token}`,
    };
};
export const apiPost = (path, data = {}) => {
    console.log({ path, data });
    const url = getApiUrl(path);
    const options = {
        headers: getheaders(),
    };

    return axios.post(url, data, options);
};

export const apiGet = (path) => {
    const url = getApiUrl(path);
    const options = {
        headers: getheaders(),
    };
    return axios.get(url, options);
};

export const apiGetNoCache = (path) => {
    const url = getApiUrl(path);
    const options = {
        headers: getheaders(),
        cache: "no-store",
    };
    return axios.get(url, options);
};
