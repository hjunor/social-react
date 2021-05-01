import { Routes, Route, useNavigate } from "react-router";
import LoginForm from "../LoginForm";
import LoginCreate from "../LoginCreate";
import LoginPasswordLost from "../LoginPasswordLost";
import LoginPasswordReset from "../LoginPasswordReset";
import { useContext } from "react";
import { UserContext } from "../../Data/userContext";
import styles from "./Styles.module.css";
import { Section } from "./styles";

function Login() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    if (!!login) {
        navigate("/account");
    }
    return (
        <Section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />}></Route>
                    <Route path="sign-up" element={<LoginCreate />}></Route>
                    <Route
                        path="recover"
                        element={<LoginPasswordLost />}
                    ></Route>
                    <Route
                        path="reset"
                        element={<LoginPasswordReset />}
                    ></Route>
                </Routes>
            </div>
        </Section>
    );
}

export default Login;
