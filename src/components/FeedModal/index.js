import { useContext, useEffect } from "react";
import { UserContext } from "../../Data/userContext";
import PhotoContent from "../../pages/PhotoContent";
import Error from "../Error";
import styles from "./Styles.module.css";

const FeedModal = ({ id, setModal }) => {
    const { error, getModal, loading, user, setPhoto, photo } = useContext(
        UserContext
    );

    useEffect(() => {
        getModal(id);
    }, [setPhoto]);

    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) {
            setPhoto(null);
            setModal(null);
        }
    }

    return (
        <div className={`${styles.modal}`} onClick={handleOutsideClick}>
            {error && <Error />}
            {/* {loadin && <Loading />} */}
            {photo && <PhotoContent data={photo}></PhotoContent>}
        </div>
    );
};

export default FeedModal;
