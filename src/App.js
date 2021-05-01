import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";

import { UserStorage } from "./Data/userContext";
import ProtectedRouter from "./components/ProtectedRouter";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="login/*" element={<Login />}></Route>
                        <ProtectedRouter
                            path="account/*"
                            element={<Account />}
                        ></ProtectedRouter>
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </>
    );
};

export default App;
