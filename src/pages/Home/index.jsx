import { RiAddLine } from 'react-icons/ri';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';


export function Home() {
    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <div className="addMovie">
                        <h1>Meus filmes</h1>
                        <button>
                            <RiAddLine/>
                            Adicionar filme
                        </button>
                    </div>
                    <div className="movieContainer">
                        <MovieCard data={{
                            title: 'Interestellar',
                            tags: [
                                { id: '1', name: 'Ficção Científica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Família' }
                            ]
                        }}
                        />

                        <MovieCard data={{
                            title: 'Interestellar',
                            tags: [
                                { id: '1', name: 'Ficção Científica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Família' }
                            ]
                        }}
                        />
                        
                        <MovieCard data={{
                            title: 'Interestellar',
                            tags: [
                                { id: '1', name: 'Ficção Científica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Família' }
                            ]
                        }}
                        />

                        <MovieCard data={{
                            title: 'Interestellar',
                            tags: [
                                { id: '1', name: 'Ficção Científica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Família' }
                            ]
                        }}
                        />
                    </div>
                </Content>
            </main>
        </Container>
    )
}