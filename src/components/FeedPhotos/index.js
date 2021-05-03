// import styles from "./Styles.module.css";

import { useContext, useEffect } from "react";
import { UserContext } from "../../Data/userContext";
import FeedPhotosItem from "../FeedPhotosItem";
import styles from "./Styles.module.css";

// import { Container } from './styles';

const FeedPhotos = () => {
    const { error, getPhotos, loading, user, photos } = useContext(UserContext);
    useEffect(() => {
        getPhotos({ page: 1, total: 2, user: 0 });
    }, []);

    return (
        <ul className={`${styles.feed} animeLeft`}>
            {photos ? (
                photos.map((photo) => (
                    <FeedPhotosItem key={photo.id} photo={photo} />
                ))
            ) : (
                <h1>carregando</h1>
            )}
            {loading && <h1>carregando</h1>}
        </ul>
    );
};

export default FeedPhotos;
