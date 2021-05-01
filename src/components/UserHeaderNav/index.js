import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Data/userContext";
import Feed from "../../pages/Feed";
import styles from "./Styles.module.css";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Photos } from "../../Assets/adicionar.svg";
import { ReactComponent as Back } from "../../Assets/sair.svg";
import { ReactComponent as Stati } from "../../Assets/estatisticas.svg";
// import { Container } from './styles';

const UserHeaderNav = () => {
    const { userLogout } = useContext(UserContext);
    const [mobile, setMobile] = useState(null);
    return (
        <nav className={styles.nav}>
            <NavLink to="/account" end activeClassName={styles.active}>
                <MyPhotos />
                {mobile && "Minhas Fotos"}
            </NavLink>
            <NavLink to="/account/statis" activeClassName={styles.active}>
                <Stati />
                {mobile && "Estatísticas"}
            </NavLink>
            <NavLink to="/account/post" activeClassName={styles.active}>
                <Photos />
                {mobile && "Adicionar Foto"}
            </NavLink>
            <button onClick={userLogout} activeClassName={styles.active}>
                <Back />
                {mobile && "sair"}
            </button>
        </nav>
    );
};

export default UserHeaderNav;
