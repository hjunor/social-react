import styles from "./Styles.module.css";

// import { Container } from './styles';

const FeedPhotosItem = ({ photo, setModal }) => {
    return (
        <li
            className={styles.photo}
            onClick={() => {
                setModal(photo);
            }}
        >
            <img src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;
