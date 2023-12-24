import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiTimeLine } from 'react-icons/ri';
import moment from 'moment-timezone';
import { api } from '../../services/api';
import { useAuth } from "../../hooks/auth";
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Rating } from '../../components/Rating';
import avatarPlaceholder from '../../assets/placeholder.svg';


export function Details() {
    const [data, setData] = useState(null);
    const [,setDate] = useState("");

    const params = useParams();
    const { user } = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;



    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movieNotes/${params.id}`);
            setData(response.data);
        }

        fetchMovie();
    }, [])

    useEffect(() => {
        async function fetchCreatedAt() {
            const response = await api.get(`/movieNotes/${params.created_at}`);
            setDate(response.data);            
        }

        fetchCreatedAt();
    }, [])


    return (
        <Container>
            <Header/>
            {
                data&& 
                <main>
                <Content>
                    <Link to="/">
                        <ButtonText title="Voltar"/>
                    </Link>
                    

                    <div className="movieInfos">
                        <h2>{data.title}</h2>
                        <Rating rating={data.rating}/>
                    </div>


                    <div className="infoUser">
                        <div className="createdBy">
                            <img src={avatarURL} alt={user.name} />
                            <span>Por {user.name}</span>
                        </div>
                        
                        {
                            data.created_at && (
                                <div className="createdAt">
                                    <RiTimeLine/>
                                    <span>
                                        {moment.utc(data.created_at).tz('America/Sao_Paulo').format('DD/MM/YYYY')} às {moment.utc(data.created_at).tz('America/Sao_Paulo').format('HH:mm')}
                                    </span>
                                </div>
                            )
                        }
                    </div>

                    {data.tags && (
                        <div className="relatedTags">
                            {data.tags.map(tag => (
                                <Tag
                                    key={String(tag.id)}
                                    title={tag.name} 
                                />
                            ))}
                        </div>
                    )}

                    <div className="movieDescription">
                        <p>{data.description}</p>
                    </div>
                </Content>
                </main>
            }
        </Container>
    )
}