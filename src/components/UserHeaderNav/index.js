import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../Data/userContext";
import styles from "./Styles.module.css";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Photos } from "../../Assets/adicionar.svg";
import { ReactComponent as Back } from "../../Assets/sair.svg";
import { ReactComponent as Stati } from "../../Assets/estatisticas.svg";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
    const { userLogout } = useContext(UserContext);
    const [menu, setMenu] = useState();
    const mobile = useMedia("(max-width: 40rem)");
    console.log("mobile", mobile);
    console.log("menu", menu);
    const { pathname } = useLocation();

    useEffect(() => {
        setMenu(false);
    }, [pathname]);
    return (
        <>
            {mobile && (
                <button
                    aria-label="menu"
                    onClick={(e) => setMenu(!menu)}
                    className={`${styles.mobileButton} ${
                        menu && styles.activeButton
                    }`}
                ></button>
            )}

            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${
                    menu && styles.navMobileActive
                }`}
            >
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
        </>
    );
};

export default UserHeaderNav;
