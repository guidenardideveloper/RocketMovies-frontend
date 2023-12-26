import { Container } from './styles';
import { Tag } from '../Tag';
import { Rating } from '../Rating';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import moment from 'moment-timezone';

export function MovieCard({ data, ...rest }) {
    const [, setDatePost] = useState("");


    useEffect(() => {
        async function fetchPostingTime() {
            const response = await api.get(`/movieNotes/created_at`);
            setDatePost(response.data);
        }

        fetchPostingTime();
    },[]) 

    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Rating rating={data.rating} />

            <div className="description">
                <p>
                    {data.description}
                </p>
            </div>

            {
                data.tags && 
                <footer>
                    <div className="tags">
                        {
                            data.tags.map( tag => <Tag key={String(tag.id)} title={tag.name}/> )
                        }
                    </div>
                    
                    <div className="latestPost">
                        <p>{moment.utc(data.created_at).tz('America/Sao_Paulo').fromNow()}</p>
                    </div>
                </footer>
            }

        </Container>
    );
}