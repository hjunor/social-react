import { getCookie, removeCookie, setCookie } from "./storage";

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires };

export const COOKIE_TOKEN = "tk";

export const setToken = (token) => setCookie(COOKIE_TOKEN, token, options);
export const getToken = () => getCookie(COOKIE_TOKEN, options);
export const removeToken = () => removeCookie(COOKIE_TOKEN, options);
