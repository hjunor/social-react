import styles from "./Styles.module.css";

// import { Container } from './styles';

function Button({ children, ...props }) {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    );
}

export default Button;
