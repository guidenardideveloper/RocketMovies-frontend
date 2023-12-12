import { Container, Profile } from './styles';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <Profile>
                <h1>RocketMovies</h1>
                <input type="text" placeholder='Pesquise pelo título' />
                <div>
                    <div>
                        <strong>Guilherme Denardi</strong>
                        <a href="#">
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