import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "../../Hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../Data/userContext";
import Error from "../../components/Error";
import styles from "./Styles.module.css";
import stylesBtn from "../../components/Button/Styles.module.css";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function LoginForm() {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }
    return (
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="ursername"
                    {...username}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>carregando</Button>
                ) : (
                    <Button>Entrar</Button>
                )}
                <Error error={error} />
            </form>
            <Link className={styles.recover} to="/login/recover">
                Perdeu a Senha?
            </Link>
            <div className={styles.signUp}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não tem conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/sign-up">
                    Cadastro
                </Link>
            </div>
        </section>
    );
}

export default LoginForm;
