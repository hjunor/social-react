import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import UserHeaderNav from "../UserHeaderNav";
import styles from "./Styles.module.css";

// import { Container } from './styles';

const UserHeader = () => {
    const [title, setTitle] = useState();
    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;
        switch (pathname) {
            case "/account/statis":
                setTitle("Estatísticas");

                break;
            case "/account/post":
                setTitle("Poste Sua Foto!");
                break;
            default:
                setTitle("Minha Conta");
        }
    }, [location]);

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    );
};

export default UserHeader;
