import { RiTimeLine } from 'react-icons/ri';
import { Container, Content } from './styles';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import {Rating} from '../../components/Rating';
import avatarPlaceholder from '../../assets/placeholder.svg';
import { useAuth } from "../../hooks/auth";
import moment from 'moment';
import 'moment-timezone';


export function Details() {
    const [data, setData] = useState(null);
    const [, setCreated] = useState("");

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
            setCreated(response.data);
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
                                    <span>{moment(data.created_at, "DD-MM-YYYY").format('L')} às {moment(data.created_at).format('LT')}</span>
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