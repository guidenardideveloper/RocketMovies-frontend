import { Container } from './styles';
import { RiStarFill, RiStarLine } from 'react-icons/ri';

export function Rating({rating}) {
    let stars = [];

    for(let i = 1; i<= 5; i++) {
        if(i <= rating) {
            stars.push(<RiStarFill key={i} />);
        } else {
            stars.push(<RiStarLine key={i} />)
        }
    }
    return (
        <Container>
            {stars}
        </Container>
    );
}