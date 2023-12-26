import { Container } from './styles';
import { Tag } from '../Tag';
import { Rating } from '../Rating';


export function MovieCard({ data, ...rest }) {
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
                    {
                        data.tags.map( tag => <Tag key={String(tag.id)} title={tag.name}/> )
                    }
                </footer>
            }
        </Container>
    );
}