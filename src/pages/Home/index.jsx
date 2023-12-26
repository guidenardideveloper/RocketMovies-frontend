import { RiAddLine } from 'react-icons/ri';
import { Container, Content, ButtonAdd } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';


export function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movienotes?title=${search}`);
            setMovies(response.data);
        }

        fetchMovies();
    }, [search]);


    return (
        <Container>
            <Header>
                <Input
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>
            <main>
                <Content>
                    <div className="addMovie">
                        <h1>Meus filmes</h1>
                        <ButtonAdd to="/new">
                            <RiAddLine/>
                            Adicionar filme
                        </ButtonAdd>
                    </div>
                    <div className="movieContainer">
                        {
                            movies.map(movie => (
                                <MovieCard 
                                    key={String(movie.id)}
                                    data={movie}
                                    onClick={() => handleDetails(movie.id)}
                                />
                            ))
                        }
                    </div>
                </Content>
            </main>
        </Container>
    )
}