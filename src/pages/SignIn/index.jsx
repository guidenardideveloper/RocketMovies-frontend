import { useState } from "react";
import { RiMailLine, RiLockLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { signIn } = useAuth();

    function handleSingIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={RiMailLine}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    icon={RiLockLine}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title={"Entrar"} onClick={handleSingIn}/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background/>
        </Container>
    )
}