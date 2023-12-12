import { RiCameraLine, RiUser3Line, RiMailLine, RiLockLine } from "react-icons/ri";
import { Container, Form, Avatar } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from "react-router-dom";

export function Profile() {
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

                <Input placeholder="Nome" type="text" icon={RiUser3Line} />
                <Input placeholder="E-mail" type="text" icon={RiMailLine} />
                <Input placeholder="Senha atual" type="password" icon={RiLockLine} />
                <Input placeholder="Nova senha" type="password" icon={RiLockLine} />

                <Button title={"Salvar"} />
            </Form>
        </Container>
    );
}