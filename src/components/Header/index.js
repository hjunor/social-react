import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { useContext } from "react";
import { UserContext } from "../../Data/userContext";

const Header = () => {
    const { user, userLogout } = useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dogs />
                </Link>
                {user ? (
                    <>
                        <Link className={styles.login} to="/account">
                            {user.nome}
                        </Link>
                    </>
                ) : (
                    <>
                        <div className={styles.liks}>
                            <Link className={styles.logout} to="/login">
                                Login
                            </Link>
                            |
                            <Link className={styles.login} to="/login/sign-up">
                                Criar
                            </Link>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
