import { useState } from "react";
import FeedModal from "../../components/FeedModal";
import FeedPhotos from "../../components/FeedPhotos";
import styles from "./Styles.module.css";

const Feed = () => {
    const [modalPhoto, setModalPhoto] = useState();
    return (
        <>
            {modalPhoto && (
                <FeedModal id={modalPhoto.id} setModal={setModalPhoto} />
            )}
            <FeedPhotos setModal={setModalPhoto} />
        </>
    );
};

export default Feed;
