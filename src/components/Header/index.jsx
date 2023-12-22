import { Container, Profile, Brand, SearchMovie } from './styles';
import { Input } from '../Input/index'
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import placeholder from '../../assets/placeholder.svg';

export function Header() {
    const { signOut, user } = useAuth();

    const avatarPlaceholder = placeholder;
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile>
                <Brand>
                    <h1>RocketMovies</h1>
                </Brand>
                <SearchMovie>
                    <Input
                        placeholder="Pesquisar pelo título"
                    />
                </SearchMovie>
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