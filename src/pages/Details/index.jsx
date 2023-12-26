import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { ButtonDelete } from '../../components/ButtonDelete';


export function Details() {
    const [data, setData] = useState(null);
    const [,setDate] = useState("");

    const params = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleBack() {
        navigate('/');
    }



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
                    <div className="buttonTextActions">
                        <ButtonText title="Voltar" onClick={handleBack}/>
                        <ButtonDelete title="Excluir"/>
                    </div>
                    

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