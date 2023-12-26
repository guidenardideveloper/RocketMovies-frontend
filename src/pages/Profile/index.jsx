import { useState } from "react";
import { RiCameraLine, RiUser3Line, RiMailLine, RiLockLine } from "react-icons/ri";
import { Container, Form, Avatar } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import placeholder from '../../assets/placeholder.svg';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarPlaceholder = placeholder;
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState();

    const navigate = useNavigate();

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated);

        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <header>
                <ButtonText title={"Voltar"} onClick={handleBack}/>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <RiCameraLine />
                        <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={RiUser3Line} value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="E-mail" type="text" icon={RiMailLine} value={email} onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha atual" type="password" icon={RiLockLine} onChange={e => setPasswordOld(e.target.value)}/>
                <Input placeholder="Nova senha" type="password" icon={RiLockLine} onChange={e => setPasswordNew(e.target.value)}/>

                <Button title={"Salvar"} onClick={handleUpdate} />
            </Form>
        </Container>
    );
}