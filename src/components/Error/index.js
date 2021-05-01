import React from "react";
import styles from "./Styles.module.css";

// import { Container } from './styles';

function Error({ error }) {
    if (!error) return null;

    return <p className={styles.message}>{error}</p>;
}

export default Error;
