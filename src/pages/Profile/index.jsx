import { useState } from "react";
import { RiCameraLine, RiUser3Line, RiMailLine, RiLockLine } from "react-icons/ri";
import { Container, Form, Avatar } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        await updateProfile({ user });
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <ButtonText title={"Voltar"}/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/guidenardideveloper.png" alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <RiCameraLine />
                        <input id="avatar" type="file" />
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