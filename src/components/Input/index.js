// import { Container } from './styles';

import styles from "./Styles.module.css";

function Input({ type, label, value, name, onChange, error, onBlur }) {
    return (
        <div className={styles.wrapper}>
            <label className={styles.lebal} htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                value={value}
                className={styles.input}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
            />

            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
}

export default Input;
