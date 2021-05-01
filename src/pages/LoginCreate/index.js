import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Input from "../../components/Input";
import { UserContext } from "../../Data/userContext";
import { useForm } from "../../Hooks/useForm";
//import styles from "./Styles.module.css";

// import { Container } from './styles';

const LoginCreate = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm("password");
    const { error, userCreate, loading } = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(username.value, password.value, email.value);
        if (username.validate() && password.validate() && email.validate()) {
            userCreate(username.value, email.value, password.value);

            username.setValue("");
            password.setValue("");
            email.setValue("");
        }
    }
    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                ></Input>
                <Input
                    label="E-mail"
                    type="email"
                    name="email"
                    {...email}
                ></Input>
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                ></Input>

                {loading ? (
                    <Button disabled>carregando</Button>
                ) : (
                    <Button>Entrar</Button>
                )}

                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginCreate;
