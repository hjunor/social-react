import React, { createContext, useCallback, useEffect, useState } from "react";
import { getToken, removeToken, setToken } from "../helpers/account";
import { apiGet, apiPost, apiGetNoCache } from "../helpers/api";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

const { Provider } = UserContext;

export const UserStorage = ({ children }) => {
    const [user, setUser] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [photo, setPhoto] = useState(null);
    const [comments, setComments] = useState(null);
    const navigate = useNavigate();
    const userLogout = useCallback(async () => {
        setUser(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        removeToken();
        navigate("/login");
    }, [navigate]);

    async function postComments(id, body) {
        try {
            setLoading(true);
            setError(null);
            console.log("**body", body);
            const payload = await apiPost(`/api/comment/${id}`, body);
            if (!payload) throw new Error(`Error: Usuario Inválido`);
            const data = (await payload) ? payload.data : null;
            setComments(data);
        } catch (err) {
            const { data } = err.response;
            setError(data.message);
        } finally {
            setLoading(false);
        }
    }
    async function getModal(id) {
        try {
            setLoading(true);
            setError(null);

            const payload = await apiGetNoCache(`/api/photo/${id}`);
            if (!payload) throw new Error(`Error: Usuario Inválido`);
            const data = (await payload) ? payload.data : null;
            setPhoto(data);
        } catch (err) {
            const { data } = err.response;
            setError(data.message);
        } finally {
            setLoading(false);
        }
    }
    async function getPhotos({ page, total, user }) {
        try {
            setLoading(true);
            setError(null);

            const payload = await apiGetNoCache(
                `/api/photo/?_pages${page}&_total=${total}&_user=${user}`
            );
            if (!payload) throw new Error(`Error: Usuario Inválido`);
            const data = (await payload) ? payload.data : null;
            setPhotos(data);
            navigate("/account");
        } catch (err) {
            const { data } = err.response;
            setError(data.message);
        } finally {
            setLoading(false);
        }
    }

    async function postCreate(body) {
        try {
            setLoading(true);
            setError(null);

            const payload = await apiPost("/api/photo", body);
            if (!payload) throw new Error(`Error: Usuario Inválido`);

            navigate("/account");
        } catch (err) {
            const { data } = err.response;
            setError(data.message);
        } finally {
            setLoading(false);
        }
    }

    async function userCreate(username, email, password) {
        try {
            setError(null);

            const payload = await apiPost("/api/user", {
                username,
                password,
                email,
            });
            if (!payload) throw new Error(`Error: Usuario Inválido`);

            userLogin(username, password);
        } catch (err) {
            const { data } = err.response;
            setError(data.message);
        } finally {
            setLoading(false);
        }
    }

    async function getUser() {
        try {
            setError(null);
            setLoading(true);

            const payload = await apiGet("/api/user");
            if (!payload) throw new Error(`Error: Usuario Inválido`);

            const data = (await payload) ? payload.data : null;
            setUser(data);
            setLogin(true);
            navigate("/account");
        } catch (err) {
            // setError("Error: Usuario ou Senha Inválido");
            const { data } = err.response;
            setError(data.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    async function userLogin(username, password) {
        setLoading(true);
        try {
            const payload = await apiPost("/jwt-auth/v1/token", {
                username,
                password,
            });

            const { token } = payload ? payload.data : null;

            setToken(token);
            setLoading(false);
            getUser();
        } catch (err) {
            setLoading(false);
            setError("Error: Usuario ou Senha Inválido");
        }
    }

    useEffect(() => {
        async function autoLogin() {
            const token = getToken();
            console.log("***Token", token);
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { data } = await apiPost(
                        "/jwt-auth/v1/token/validate"
                    );

                    getUser();

                    if (!data.ok) throw new Error("Error: Token invalido");

                    navigate("/account");
                } catch (err) {
                    setError("Error: Requisição invalida...");
                } finally {
                    setLoading(false);
                }
            }
        }

        autoLogin();
    }, []);

    return (
        <Provider
            value={{
                userLogin,
                getUser,
                user,
                userLogout,
                error,
                loading,
                login,
                userCreate,
                postCreate,
                photo,
                photos,
                getPhotos,
                getModal,
                setPhoto,
                postComments,
                comments,
            }}
        >
            {children}
        </Provider>
    );
};
