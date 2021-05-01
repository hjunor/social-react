// import { Container } from './styles';

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Data/userContext";

const useMedia = (media) => {
    const [match, setMach] = useState(null);
    // const load = window.addEventListener('load')
    useEffect(() => {
        function changeMatch() {
            const { matches } = window.matchMedia(media);
            setMach(matches);
        }

        window.addEventListener("resize", changeMatch);

        return () => {
            window.removeEventListener("resize", changeMatch);
        };
    }, [media]);

    return match;
};

export default useMedia;
