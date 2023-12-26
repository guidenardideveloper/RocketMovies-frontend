import { Container, Profile, Brand, SearchMovie } from './styles';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import placeholder from '../../assets/placeholder.svg';

export function Header({children}) {
    const { signOut, user } = useAuth();
    const navigation = useNavigate();

    function handleSignOut() {
        navigation('/');
        signOut();
    }

    const avatarPlaceholder = placeholder;
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile>
                <Brand>
                    <h1>RocketMovies</h1>
                </Brand>
                <SearchMovie>
                    {children}
                </SearchMovie>
                <div>
                    <div>
                        <strong>{user.name}</strong>
                        <a onClick={handleSignOut}>
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