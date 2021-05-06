import { useContext, useEffect } from "react";
import { UserContext } from "../../Data/userContext";
import PhotoContent from "../../pages/PhotoContent";
import Error from "../Error";
import styles from "./Styles.module.css";

const FeedModal = ({ id, setModal }) => {
    const { error, getModal, loading, user, photo } = useContext(UserContext);

    useEffect(() => {
        getModal(id);
    }, [photo, getModal]);

    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) setModal(null);
    }

    return (
        <div className={`${styles.modal}`} onClick={handleOutsideClick}>
            {error && <Error />}
            {/* {loadin && <Loading />} */}
            {photo || !loading ? (
                <PhotoContent data={photo}></PhotoContent>
            ) : null}
        </div>
    );
};

export default FeedModal;
