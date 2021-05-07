import { useContext, useState } from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import { UserContext } from "../../Data/userContext";
import { getToken } from "../../helpers/account";
const PhotoCommentsForm = ({ id }) => {
    const { postComments } = useContext(UserContext);

    const [comment, setComment, error] = useState();
    function handleSubmit(event) {
        event.preventDefault();
        postComments(id, { comment });
        console.log("***comentario error", { comment });
    }
    return (
        <form>
            <textarea
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            ></textarea>
            <button onClick={handleSubmit}>
                <Enviar />
            </button>
        </form>
    );
};

export default PhotoCommentsForm;
