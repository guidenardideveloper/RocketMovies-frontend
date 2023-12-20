import { Container, Profile } from './styles';
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    return (
        <Container>
            <Profile>
                <h1>RocketMovies</h1>
                <input type="text" placeholder='Pesquise pelo título' />
                <div>
                    <div>
                        <strong>{user.name}</strong>
                        <a onClick={signOut}>
                            <span>sair</span>
                        </a>
                    </div>
                    <Link to="/profile">
                        <img src={avatarUrl} alt={user.name} />
                    </Link>
                </div>
            </Profile>
        </Container>
    );
}