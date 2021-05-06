import { useState } from "react";
import FeedModal from "../../components/FeedModal";
import FeedPhotos from "../../components/FeedPhotos";
import styles from "./Styles.module.css";

// import { Container } from './styles';

const Feed = () => {
    const [modalPhoto, setModalPhoto] = useState();
    console.log(modalPhoto);
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
