import { RiMailLine, RiLockLine, RiUser3Line } from "react-icons/ri";
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
    return (
        <Container>
            <Background/>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input placeholder="Nome" type="text" icon={RiUser3Line}/>
                <Input placeholder="E-mail" type="text" icon={RiMailLine}/>
                <Input placeholder="Senha" type="password" icon={RiLockLine}/>

                <Button title={"Cadastrar"}/>

                <div className="btn-back">
                    <ButtonText title={"Voltar para o login"}/>
                </div>
            </Form>
        </Container>
    )
}