import { Container, Profile } from './styles';

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
                    <img src="https://github.com/guidenardideveloper.png" alt="Foto do usuário" />
                </div>
            </Profile>
        </Container>
    );
}