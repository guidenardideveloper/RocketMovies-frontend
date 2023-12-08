import { RiArrowLeftLine } from 'react-icons/ri';
import { Container } from './styles';


export function ButtonText({ title }) {
    return (
        <Container type='button'>
            <RiArrowLeftLine/>
            {title}
        </Container>
    );
}