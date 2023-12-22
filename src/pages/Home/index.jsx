import { RiAddLine } from 'react-icons/ri';
import { Container, Content, ButtonAdd } from './styles';
import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';


export function Home() {
    const [search, setSearch] = useState("");
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movienotes?title=${search}`);
            setMovie(response.data);
        }

        fetchMovies();
    }, [search])

    return (
        <Container>
            <Header/>
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
                            movie.map(movie => (
                                <MovieCard 
                                    key={String(movie.id)}
                                    data={movie}
                                />
                            ))
                        }
                    </div>
                </Content>
            </main>
        </Container>
    )
}