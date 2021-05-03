import styles from "./Styles.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "../../Hooks/useForm";
import { useContext, useState } from "react";
import { UserContext } from "../../Data/userContext";
import Error from "../../components/Error";

// import { Container } from './styles';

const PostPhoto = () => {
    const name = useForm();
    const wheight = useForm("number");
    const age = useForm("number");
    const [img, setImg] = useState({});
    const { error, postCreate, loading } = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();

        formData.append("img", img.raw);
        formData.append("nome", name.value);
        formData.append("peso", wheight.value);
        formData.append("idade", age.value);

        postCreate(formData);
    }
    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }
    return (
        <section className={`${styles.photoPost} animaLeft`}>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...name} />
                <Input label="Peso" type="number" name="peso" {...wheight} />
                <Input label="Idade" type="number" name="idade" {...age} />
                <input
                    className={styles.file}
                    type="file"
                    name="img"
                    id="img"
                    onChange={handleImgChange}
                />
                {loading ? (
                    <Button disabled>carregando</Button>
                ) : (
                    <Button>Enviar</Button>
                )}
            </form>
            <Error error={error} />
            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url('${img.preview}')` }}
                    ></div>
                )}
            </div>
        </section>
    );
};

export default PostPhoto;
