import { useContext, useState } from "react";
import { UserContext } from "../../Data/userContext";
import PhotoCommentsForm from "../PhotoCommentsForm";
import styles from "./Styles.module.css";

// import { Container } from './styles';

const PhotoComments = ({ id }) => {
    const [comments, setComments] = useState();
    const { login } = useContext(UserContext);
    return <>{login && <PhotoCommentsForm id={id} />}</>;
};

export default PhotoComments;
