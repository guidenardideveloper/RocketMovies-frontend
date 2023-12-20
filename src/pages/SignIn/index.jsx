import { RiMailLine, RiLockLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
    
    const data = useAuth();

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" type="text" icon={RiMailLine}/>
                <Input placeholder="Senha" type="password" icon={RiLockLine}/>

                <Button title={"Entrar"}/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background/>
        </Container>
    )
}