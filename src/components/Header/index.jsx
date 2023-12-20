import { Container, Profile } from './styles';
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { signOut } = useAuth();

    return (
        <Container>
            <Profile>
                <h1>RocketMovies</h1>
                <input type="text" placeholder='Pesquise pelo título' />
                <div>
                    <div>
                        <strong>Guilherme Denardi</strong>
                        <a onClick={signOut}>
                            <span>sair</span>
                        </a>
                    </div>
                    <Link to="/profile">
                        <img src="https://github.com/guidenardideveloper.png" alt="Foto do usuário" />
                    </Link>
                </div>
            </Profile>
        </Container>
    );
}