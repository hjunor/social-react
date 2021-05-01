import { useState } from "react";

// import { Container } from './styles';

const types = {
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: "Preencha um email válido",
    },
    password: {
        regex: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        message:
            "A senha deve conter 1 caracter maíusculo, 1 minúsculo e 1 expecial. Com no mínimo 8 caracteres",
    },
};

function useForm(type) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError("Preencha um valor.");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }
    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
    }
    return {
        value,
        setValue,
        onChange,
        error,
        setValue,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
}

export { useForm };
