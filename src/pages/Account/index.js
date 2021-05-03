import { Route, Routes } from "react-router";
import UserHeader from "../../components/UserHeader";
import Feed from "../Feed";
import PostPhoto from "../PostPhoto";
import Statis from "../../pages/Statis";
// import styles from "./Styles.module.css";
// import { Container } from './styles';

const Account = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/post" element={<PostPhoto />} />
                <Route path="/statistic" element={<Statis />} />
            </Routes>
        </section>
    );
};

export default Account;
